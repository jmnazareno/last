<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use App\Http\Requests\StorePostsRequest;
use App\Http\Requests\UpdatePostsRequest;
use App\Http\Resources\PostsResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return PostsResource::collection(
            Posts::where('user_id', $user->id)
                ->orderBy('created_at', 'desc')
                ->paginate(2)
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostsRequest $request)
    {
        $data = $request->validated();

        // Check if image was given and save on local file system
        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $posts = Posts::create($data);

        return new PostsResource($posts);
    }

    /**
     * Display the specified resource.
     */
    public function show(Posts $posts, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $posts->user_id) {
            return abort(403, 'Unauthorized action');
        }
        return new PostsResource($posts);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Posts $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostsRequest $request, Posts $posts)
    {
        $data = $request->validated();

        // Check if image was given and save on local file system
        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            // If there is an old image, delete it
            if ($posts->image) {
                $absolutePath = public_path($posts->image);
                File::delete($absolutePath);
            }
        }

        // Update posts in the database
        $posts->update($data);

        return new PostsResource($posts);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Posts $posts, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $posts->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $posts->delete();

        // If there is an old image, delete it
        if ($posts->image) {
            $absolutePath = public_path($posts->image);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    private function saveImage($image)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }



}




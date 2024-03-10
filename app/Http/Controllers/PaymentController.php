<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Curl;

class PaymentController extends Controller
{
       public function pay()
    {
       $data = [
            'data' => [
                'attributes' => [
                    'line_items' => [
                        [
                            'currency'      => 'PHP',
                            'amount'        => 10000,
                            'description'   => 'text',
                            'name'          => 'Test Product',
                            'quantity'      => 1,
                        ]
                    ],
                    'payment_method_types' => [
                        'card',
                        'gcash',
                        'grab_pay',
                        'paymaya',
                    ],
                    'success_url' => 'http://localhost:3000',
                    'cancel_url' => 'http://localhost:8000/success',
                    'description' => 'text',
                    'email_reciept' => 'true'
                ],
            ]
       ];

       $response = Curl::to('https://api.paymongo.com/v1/checkout_sessions')
                    ->withHeader('Content-Type: application/json')
                    ->withHeader('accept: application/json')
                    ->withHeader('Authorization: Basic '.env('AUTH_PAY'))
                    ->withData($data)
                    ->asJson()
                    ->post();

        
        \Session::put('session_id',$response->data->id);

        return redirect()->to($response->data->attributes->checkout_url);
    }

    public function success()
    {
       $sessionId = \Session::get('session_id');


      $response = Curl::to('https://api.paymongo.com/v1/checkout_sessions/'.$sessionId)
                ->withHeader('accept: application/json')
                ->withHeader('Authorization: Basic '.env('AUTH_PAY'))
                ->asJson()
                ->get();

        dd($response);

    }

}

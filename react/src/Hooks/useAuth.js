import React, { useContext } from 'react'
import { ContextProvider } from '../Context/ContextProvider'

import React from 'react'

const useAuth = () => {
    return useContext(ContextProvider);
}

export default useAuth

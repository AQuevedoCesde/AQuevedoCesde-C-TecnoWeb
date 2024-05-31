
const rutas = ()=>{
    let routes = useRoutes([
        {path : '/', element: <Login/>},
        {path : '/crear_usuario', element: <MyAccount/>},
        {path : '/my-order', element: <MyOrder/>},   
        {path : '/my-orders', element: <MyOrders/>},
        {path : '/sign-in', element: <SignIn/>},
        {path : '/*', element: <NotFound/>}
       ])
}
function Principal() {
    
  return (
   
  )
}

export default Principal

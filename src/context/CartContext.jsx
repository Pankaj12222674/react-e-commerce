import { useEffect, useMemo, useState } from 'react'
import { initialProducts } from '../data/product'
import { CartContext } from './cartContext'

const CART_STORAGE_KEY = 'wdm-store-cart'

const getStoredCart = () => {
  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getStoredCart)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => setCartItems([])

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      products: initialProducts,
      cartItems,
      cartCount,
      cartSubtotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [cartItems, cartCount, cartSubtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

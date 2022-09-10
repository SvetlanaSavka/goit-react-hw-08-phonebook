import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contact-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { middleware } from './middleware';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedReducer, contacts: contactsReducer },
  middleware,
});

export const persistor = persistStore(store);

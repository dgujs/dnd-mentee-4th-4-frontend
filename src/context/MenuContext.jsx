import React, { useState, useEffect, createContext } from 'react';
import * as API from '../lib/APIs';
import { makeMenu } from '../lib/Util';

const MenuContext = createContext();

const categoryIntialState = [{ id: 0, name: 'HOME' }];

const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoryIntialState);
  const [menu, setMenu] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [promotions, setPromotions] = useState();

  const value = {
    categories,
    menu,
    promotions,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    setPromotions
  };

  useEffect(() => {
    const getMenu = async () => {
      let _categories = await API.getCategory();
      const _brands = await API.getBrand();

      _categories = [...categories, ..._categories];
      setCategories(_categories);
      setMenu(makeMenu(_categories, _brands));
    };
    getMenu();
  }, []);

  useEffect(() => {
    const getPromotions = async () => {
      const _promotions = await API.getPromotions(selectedBrand);
      // 시연용 .. 너무 내용이 많아서 임시로 프론트에서 먼저 짤라봄
      _promotions.data = _promotions.data.splice(0,30);
      setPromotions(_promotions);
    };
    getPromotions();
  }, [selectedBrand]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;

export { MenuProvider };

const router = require("express").Router();

const {
  signupValidation,
  loginValidation,
  authenticateUser,
} = require("../Middlewares/AuthValidation");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
  keepaProductfetch,
  sellerInfo,
  fetchAllSellers,
  allSellerData,
  productsBySellerID,
  // getUserSellers,
  fetchGraphImage,
  SearchBySellerApi,
  SearchProductapi,
  editSellerInfo,
  removeSeller,
  saveUserProductId,
  getUserProductIds,
  deleteUserProductId,
  pauseSellerids,
  sellersaveid,
  deletesellersaveid,
  logout,
  loadCurrentUser,
  confirmEmail,
  pauseSeller,
  loadUserAllSellers,
  loadSellerAllProducts,
  saveSeller,
  saveProduct,
  loadSpecificSellerProduct,
  loadAllProductsUser,
  loadUserSavedSellers,
  markAsReadNewProducts,
} = require("../Controllers/AuthController");

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.post("/confirm-email/:token", authenticateUser, confirmEmail);
router.get("/logout", authenticateUser, logout);
router.get("/load-current-user", authenticateUser, loadCurrentUser);
router.get("/pause-seller/:sellerId", pauseSeller);

router.get("/load-user-all-sellers", authenticateUser, loadUserAllSellers);
router.get(
  "/load-user-all-products/:sellerId",
  authenticateUser,
  loadSellerAllProducts
);
//token generate
router.post("/forget-password", forgotPassword);
//password reset
router.post("/reset-password/:token", resetPassword);

router.post("/change-password", authenticateUser, changePassword);

router.put("/edit-user", authenticateUser, updateUser);

router.get("/api/product/:asin", keepaProductfetch);

router.get("/api/seller/:sellerId", authenticateUser, sellerInfo);

router.get("/save-seller/:sellerId", authenticateUser, saveSeller);
router.get("/save-product/:sellerId/:productId", authenticateUser, saveProduct);
router.put("/api/edit-seller-info/:sellerId", editSellerInfo);
router.get(
  "/load-specific-seller-product/:sellerId",
  authenticateUser,
  loadSpecificSellerProduct
);

router.get("/load-all-products-user", authenticateUser, loadAllProductsUser);

router.delete("/api/remove-seller/:sellerId", removeSeller);

router.get("/api/search-seller", authenticateUser, SearchBySellerApi);

// router.get("/api/getUserSellers", authenticateUser, getUserSellers);
router.get("/load-user-saved-sellers", authenticateUser, loadUserSavedSellers);
router.post(
  "/api/saveUserProductId/:productId",
  authenticateUser,
  saveUserProductId
);
router.get(
  "/mark-as-read-new-products/:sellerId",
  authenticateUser,
  markAsReadNewProducts
);
router.get("/api/getUserProductIds", authenticateUser, getUserProductIds);

router.get("/api/PauseSellerids/:sellerId", authenticateUser, pauseSellerids);

router.post("/api/SaveSellerid/:sellerid", authenticateUser, sellersaveid);

router.delete(
  "/api/deletesellersaveid/:sellerid",
  authenticateUser,
  deletesellersaveid
);

router.delete(
  "/api/deleteUserProductId/:productId",
  authenticateUser,
  deleteUserProductId
);

router.get("/api/productsBySellerID/:sellerId", productsBySellerID);

router.get("/api/allSellerData", allSellerData);

router.get("/api/sellers", fetchAllSellers);

router.get("/api/images/:asin", fetchGraphImage);

module.exports = router;

// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Plus, Edit2, Trash2, Save, X, Upload, ShoppingBag } from 'lucide-react';
// // import { useAPI } from '../Context/AuthContext';

// // const ProductManagement = () => {
// //   const [products, setProducts] = useState([]);
// //   const { ListCategories,CreateProduct } = useAPI();
// //   const [categories, setCategories] = useState([]);
// //   const [isCreating, setIsCreating] = useState(false);
// //   const [editingId, setEditingId] = useState(null);
// //   const [selectedImages, setSelectedImages] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //       const [images, setImages] = useState([])
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     category_id: '',
// //     description: '',
// //     nutrition: [{ name: '', quantity: '' }],
// //     ingredients: ['']
// //   });

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const response = await ListCategories();
// //         if (response.success === 1 && response.data) {
// //           // Map the API response to the desired format with id and category
// //           const formattedCategories = response.data.map(item => ({
// //             id: item.id,
// //             category: item.title
// //           }));
// //           setCategories(formattedCategories);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching categories:', error);
// //         // Fallback to default categories in case of error
// //         setCategories([
// //           { id: 1, category: 'Granola 360GR' },
// //           { id: 2, category: 'Gluten Free Granola' },
// //           { id: 3, category: 'Gluten Free Cookie' },
// //           { id: 4, category: 'Granola Bites' }
// //         ]);
// //       }
// //     };

// //     fetchCategories();
// //   }, []); // Empty dependency array to run only once on mount

// //   const handleCreate = () => {
// //     setIsCreating(true);
// //     setFormData({
// //       title: '',
// //       category_id: '',
// //       description: '',
// //       nutrition: [{ name: '', quantity: '' }],
// //       ingredients: ['']
// //     });
// //     setSelectedImages([]);
// //   };

// //   const handleImageUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     setSelectedImages(prev => [...prev, ...files]);
// //   };

// //   const removeImage = (index) => {
// //     setSelectedImages(prev => prev.filter((_, i) => i !== index));
// //   };

// //   const addField = (field) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [field]: [...prev[field], field === 'nutrition' ? { name: '', quantity: '' } : '']
// //     }));
// //   };

// //   const removeField = (field, index) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [field]: prev[field].filter((_, i) => i !== index)
// //     }));
// //   };

// //   const updateField = (field, index, value, subField = null) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [field]: prev[field].map((item, i) => 
// //         i === index ? (subField ? { ...item, [subField]: value } : value) : item
// //       )
// //     }));
// //   };

// // //   const handleSave = async () => {
// // //     if (!formData.title.trim() || !formData.category_id) return;
// // // console.log("formdata is ", formData);

// // //     try {
// // //       const productData = {
// // //         title: formData.title,
// // //         category_id: parseInt(formData.category_id),
// // //         description: formData.description,
// // //         nutrition: JSON.stringify(
// // //           formData.nutrition.filter(n => n.name.trim() && n.quantity.trim())
// // //         ),
// // //         ingredients: JSON.stringify(
// // //           formData.ingredients.filter(i => i.trim())
// // //         )
// // //       };

// // //       const newProduct = {
// // //         id: Date.now(),
// // //         ...productData,
// // //         nutrition: formData.nutrition.filter(n => n.name.trim() && n.quantity.trim()),
// // //         ingredients: formData.ingredients.filter(i => i.trim()),
// // //         images: selectedImages.map(file => URL.createObjectURL(file)),
// // //         createdAt: new Date().toISOString()
// // //       };

// // //       if (editingId) {
// // //         setProducts(products.map(prod => 
// // //           prod.id === editingId ? { ...prod, ...newProduct } : prod
// // //         ));
// // //         setEditingId(null);
// // //       } else {
// // //         setProducts([...products, newProduct]);
// // //       }

// // //       setIsCreating(false);
// // //       setFormData({
// // //         title: '',
// // //         category_id: '',
// // //         description: '',
// // //         nutrition: [{ name: '', quantity: '' }],
// // //         ingredients: ['']
// // //       });
// // //       setSelectedImages([]);
// // //     } catch (error) {
// // //       console.error('Error saving product:', error);
// // //     }
// // //   };


// // const handleSaveProduct = async () => {
// //     if (!formData.title || !formData.category_id) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       // Create FormData object
// //       const formDataToSend = new FormData();
      
// //       // Create payload with the exact format you specified
// //       const payload = {
// //         title: formData.title,
// //         category_id: formData.category_id,
// //         description: formData.description,
// //         nutrition: formData.nutrition,
// //         ingredients: formData.ingredients
// //       };

// //       // Append data as JSON string
// //       formDataToSend.append("data", JSON.stringify(payload));
      
// //       // Append images
// //       images.forEach((img) => formDataToSend.append("images", img));
// //    console.log("fordata updated is ", formDataToSend);
   
// //       // Call the API
// //       // const result = await CreateProduct(formDataToSend);
      
// //       console.log('Product created successfully:', result);
// //       // Handle success (redirect, show message, etc.)
      
// //     } catch (error) {
// //       console.error('Error creating product:', error);
// //       // Handle error (show error message)
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   const handleEdit = (product) => {
// //     setEditingId(product.id);
// //     setFormData({
// //       title: product.title,
// //       category_id: product.category_id.toString(),
// //       description: product.description,
// //       nutrition: product.nutrition.length > 0 ? product.nutrition : [{ name: '', quantity: '' }],
// //       ingredients: product.ingredients.length > 0 ? product.ingredients : ['']
// //     });
// //     setSelectedImages([]);
// //   };

// //   const handleDelete = (id) => {
// //     setProducts(products.filter(prod => prod.id !== id));
// //   };

// //   const handleCancel = () => {
// //     setIsCreating(false);
// //     setEditingId(null);
// //     setFormData({
// //       title: '',
// //       category_id: '',
// //       description: '',
// //       nutrition: [{ name: '', quantity: '' }],
// //       ingredients: ['']
// //     });
// //     setSelectedImages([]);
// //   };

// //   const inputVariants = {
// //     focus: {
// //       scale: 1.02,
// //       boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
// //       transition: {
// //         type: "spring",
// //         stiffness: 400,
// //         damping: 25
// //       }
// //     }
// //   };

// //   return (
// //     <div className="space-y-8">
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="flex justify-between items-center"
// //       >
// //         <div>
// //           <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">Products</h3>
// //           <p className="text-[#8B5E3C]/70 text-lg mt-2">Manage your natural food products</p>
// //           <motion.div
// //             initial={{ width: 0 }}
// //             animate={{ width: "100px" }}
// //             transition={{ delay: 0.5, duration: 0.8 }}
// //             className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mt-4"
// //           />
// //         </div>
        
// //         <motion.button
// //           whileHover={{ 
// //             scale: 1.05,
// //             boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
// //           }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={handleCreate}
// //           className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl"
// //         >
// //           <Plus size={24} />
// //           <span>Add Product</span>
// //         </motion.button>
// //       </motion.div>

// //       {/* Create/Edit Form */}
// //       <AnimatePresence>
// //         {(isCreating || editingId) && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
// //           >
// //             <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-6">
// //               {editingId ? 'Edit Product' : 'Create New Product'}
// //             </h4>
            
// //             <div className="space-y-8">
// //               {/* Basic Information */}
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
// //                     Product Title *
// //                   </label>
// //                   <motion.input
// //                     variants={inputVariants}
// //                     whileFocus="focus"
// //                     type="text"
// //                     value={formData.title}
// //                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
// //                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                     placeholder="Enter product title"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
// //                     Category *
// //                   </label>
// //                   <motion.select
// //                     variants={inputVariants}
// //                     whileFocus="focus"
// //                     value={formData.category_id}
// //                     onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
// //                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                   >
// //                     <option value="">Select Category</option>
// //                     {categories.map(category => (
// //                       <option key={category.id} value={category.id}>
// //                         {category.category}
// //                       </option>
// //                     ))}
// //                   </motion.select>
// //                 </div>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
// //                   Description
// //                 </label>
// //                 <motion.textarea
// //                   variants={inputVariants}
// //                   whileFocus="focus"
// //                   value={formData.description}
// //                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //                   rows={4}
// //                   className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                   placeholder="Enter product description"
// //                 />
// //               </div>

// //               {/* Image Upload */}
// //               <div>
// //                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
// //                   Product Images
// //                 </label>
// //                 <motion.div
// //                   whileHover={{ scale: 1.02 }}
// //                   className="border-2 border-dashed border-[#8B5E3C]/30 rounded-2xl p-8 text-center hover:border-[#8B5E3C]/50 transition-colors cursor-pointer"
// //                 >
// //                   <input
// //                     type="file"
// //                     multiple
// //                     accept="image/*"
// //                     onChange={handleImageUpload}
// //                     className="hidden"
// //                     id="product-images"
// //                   />
// //                   <label htmlFor="product-images" className="cursor-pointer">
// //                     <Upload size={48} className="mx-auto text-[#8B5E3C]/50 mb-4" />
// //                     <p className="text-[#8B5E3C] font-medium text-lg">Click to upload images</p>
// //                     <p className="text-[#8B5E3C]/60 mt-2">Multiple images can be selected</p>
// //                   </label>
// //                 </motion.div>

// //                 {selectedImages.length > 0 && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
// //                   >
// //                     {selectedImages.map((file, index) => (
// //                       <motion.div
// //                         key={index}
// //                         whileHover={{ scale: 1.05 }}
// //                         className="relative group"
// //                       >
// //                         <img
// //                           src={URL.createObjectURL(file)}
// //                           alt={`Preview ${index}`}
// //                           className="w-full h-24 object-cover rounded-2xl"
// //                         />
// //                         <motion.button
// //                           whileHover={{ scale: 1.2 }}
// //                           onClick={() => removeImage(index)}
// //                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
// //                         >
// //                           <X size={14} />
// //                         </motion.button>
// //                       </motion.div>
// //                     ))}
// //                   </motion.div>
// //                 )}
// //               </div>

// //               {/* Nutrition Information */}
// //               <div>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <label className="block text-sm font-medium text-[#8B5E3C]">
// //                     Nutrition Information
// //                   </label>
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     type="button"
// //                     onClick={() => addField('nutrition')}
// //                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
// //                   >
// //                     <Plus size={16} />
// //                     <span>Add Nutrition</span>
// //                   </motion.button>
// //                 </div>

// //                 <div className="space-y-3">
// //                   {formData.nutrition.map((item, index) => (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       className="flex space-x-3 items-start"
// //                     >
// //                       <motion.input
// //                         variants={inputVariants}
// //                         whileFocus="focus"
// //                         type="text"
// //                         value={item.name}
// //                         onChange={(e) => updateField('nutrition', index, e.target.value, 'name')}
// //                         placeholder="Ingredient name"
// //                         className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                       />
// //                       <motion.input
// //                         variants={inputVariants}
// //                         whileFocus="focus"
// //                         type="text"
// //                         value={item.quantity}
// //                         onChange={(e) => updateField('nutrition', index, e.target.value, 'quantity')}
// //                         placeholder="Quantity (e.g., 1kg)"
// //                         className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                       />
// //                       {formData.nutrition.length > 1 && (
// //                         <motion.button
// //                           whileHover={{ scale: 1.1 }}
// //                           whileTap={{ scale: 0.9 }}
// //                           type="button"
// //                           onClick={() => removeField('nutrition', index)}
// //                           className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
// //                         >
// //                           <X size={18} />
// //                         </motion.button>
// //                       )}
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Ingredients Information */}
// //               <div>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <label className="block text-sm font-medium text-[#8B5E3C]">
// //                     Ingredients Information
// //                   </label>
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     type="button"
// //                     onClick={() => addField('ingredients')}
// //                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
// //                   >
// //                     <Plus size={16} />
// //                     <span>Add Ingredient</span>
// //                   </motion.button>
// //                 </div>

// //                 <div className="space-y-3">
// //                   {formData.ingredients.map((item, index) => (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       className="flex space-x-3 items-start"
// //                     >
// //                       <motion.input
// //                         variants={inputVariants}
// //                         whileFocus="focus"
// //                         type="text"
// //                         value={item}
// //                         onChange={(e) => updateField('ingredients', index, e.target.value)}
// //                         placeholder="Enter ingredient"
// //                         className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
// //                       />
// //                       {formData.ingredients.length > 1 && (
// //                         <motion.button
// //                           whileHover={{ scale: 1.1 }}
// //                           whileTap={{ scale: 0.9 }}
// //                           type="button"
// //                           onClick={() => removeField('ingredients', index)}
// //                           className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
// //                         >
// //                           <X size={18} />
// //                         </motion.button>
// //                       )}
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Action Buttons */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="flex space-x-4 pt-6 border-t border-[#8B5E3C]/20"
// //               >
// //                 <motion.button
// //                   whileHover={{ 
// //                     scale: 1.05,
// //                     boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
// //                   }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={handleSaveProduct}
// //                   disabled={!formData.title.trim() || !formData.category_id}
// //                   className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
// //                 >
// //                   <Save size={20} />
// //                   <span>Save Product</span>
// //                 </motion.button>
                
// //                 <motion.button
// //                   whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={handleCancel}
// //                   className="px-8 py-4 border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-2xl font-semibold flex items-center space-x-3 hover:bg-[#8B5E3C]/10 transition-colors"
// //                 >
// //                   <X size={20} />
// //                   <span>Cancel</span>
// //                 </motion.button>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Products Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <AnimatePresence>
// //           {products.map((product, index) => (
// //             <motion.div
// //               key={product.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ delay: index * 0.1 }}
// //               whileHover={{ 
// //                 scale: 1.02,
// //                 y: -5,
// //                 transition: { type: "spring", stiffness: 400 }
// //               }}
// //               className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group"
// //             >
// //               {product.images && product.images.length > 0 && (
// //                 <div className="mb-4 rounded-2xl overflow-hidden">
// //                   <img
// //                     src={product.images[0]}
// //                     alt={product.title}
// //                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                 </div>
// //               )}

// //               <div className="flex justify-between items-start mb-4">
// //                 <div>
// //                   <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{product.title}</h4>
// //                   <p className="text-[#8B5E3C]/70 text-sm mt-1">
// //                     {categories.find(cat => cat.id === product.category_id)?.category}
// //                   </p>
// //                 </div>
// //                 <div className="flex space-x-2">
// //                   <motion.button
// //                     whileHover={{ scale: 1.1 }}
// //                     whileTap={{ scale: 0.9 }}
// //                     onClick={() => handleEdit(product)}
// //                     className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors"
// //                   >
// //                     <Edit2 size={18} />
// //                   </motion.button>
// //                   <motion.button
// //                     whileHover={{ scale: 1.1 }}
// //                     whileTap={{ scale: 0.9 }}
// //                     onClick={() => handleDelete(product.id)}
// //                     className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
// //                   >
// //                     <Trash2 size={18} />
// //                   </motion.button>
// //                 </div>
// //               </div>

// //               <div className="space-y-3">
// //                 <p className="text-[#8B5E3C]/80 text-sm leading-relaxed line-clamp-2">
// //                   {product.description}
// //                 </p>

// //                 {product.nutrition && product.nutrition.length > 0 && (
// //                   <div className="text-xs text-[#8B5E3C]/70">
// //                     <strong>Nutrition:</strong> {product.nutrition.slice(0, 2).map(n => `${n.name} (${n.quantity})`).join(', ')}
// //                     {product.nutrition.length > 2 && '...'}
// //                   </div>
// //                 )}

// //                 {product.ingredients && product.ingredients.length > 0 && (
// //                   <div className="text-xs text-[#8B5E3C]/70">
// //                     <strong>Ingredients:</strong> {product.ingredients.slice(0, 3).join(', ')}
// //                     {product.ingredients.length > 3 && '...'}
// //                   </div>
// //                 )}

// //                 <div className="text-xs text-[#8B5E3C]/60">
// //                   Created: {new Date(product.createdAt).toLocaleDateString()}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </AnimatePresence>
// //       </div>

// //       {products.length === 0 && !isCreating && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           className="text-center py-16"
// //         >
// //           <div className="text-[#8B5E3C]/20 mb-4">
// //             <ShoppingBag size={80} className="mx-auto" />
// //           </div>
// //           <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">No Products Yet</h4>
// //           <p className="text-[#8B5E3C]/70 text-lg">Create your first product to get started</p>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProductManagement;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Edit2, Trash2, Save, X, Upload, ShoppingBag, Loader } from 'lucide-react';
// import { useAPI } from '../Context/AuthContext';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const { ListCategories, CreateProduct, ListProducts, UpdateProduct, DeleteProduct } = useAPI();
//   const [categories, setCategories] = useState([]);
//   const [isCreating, setIsCreating] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [existingImages, setExistingImages] = useState([]);
//   const [deletingId, setDeletingId] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category_id: '',
//     description: '',
//     nutrition: [{ 
//       name: '', 
//       per_100g: '', 
//       ri_percent_100g: '', 
//       portion: '', 
//       ri_percent_portion: '' 
//     }],
//     ingredients: ['']
//   });

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await ListCategories();
//         if (response.success === 1 && response.data) {
//           const formattedCategories = response.data.map(item => ({
//             id: item.id,
//             category: item.title
//           }));
//           setCategories(formattedCategories);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//         setCategories([
//           { id: 1, category: 'Granola 360GR' },
//           { id: 2, category: 'Gluten Free Granola' },
//           { id: 3, category: 'Gluten Free Cookie' },
//           { id: 4, category: 'Granola Bites' }
//         ]);
//       }
//     };

//     const fetchProducts = async () => {
//       try {
//         const response = await ListProducts();
//         if (response.success === 1 && response.data) {
//           const formattedProducts = response.data.map(item => ({
//             id: item.id,
//             title: item.title,
//             category_id: item.category_id,
//             description: item.description,
//             nutrition: item.nutrition,
//             ingredients: item.ingredients,
//             images: item.images.map(img => img.original),
//             createdAt: item.created_at
//           }));
//           setProducts(formattedProducts);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchCategories();
//     fetchProducts();
//   }, []);

//   const handleCreate = () => {
//     setIsCreating(true);
//     setEditingId(null);
//     setFormData({
//       title: '',
//       category_id: '',
//       description: '',
//       nutrition: [{ 
//         name: '', 
//         per_100g: '', 
//         ri_percent_100g: '', 
//         portion: '', 
//         ri_percent_portion: '' 
//       }],
//       ingredients: ['']
//     });
//     setSelectedImages([]);
//     setImages([]);
//     setExistingImages([]);
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedImages(prev => [...prev, ...files]);
//     setImages(prev => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setSelectedImages(prev => prev.filter((_, i) => i !== index));
//     setImages(prev => prev.filter((_, i) => i !== index));
//   };

//   const removeExistingImage = (index) => {
//     setExistingImages(prev => prev.filter((_, i) => i !== index));
//   };

//   const addField = (field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: [...prev[field], field === 'nutrition' ? { 
//         name: '', 
//         per_100g: '', 
//         ri_percent_100g: '', 
//         portion: '', 
//         ri_percent_portion: '' 
//       } : '']
//     }));
//   };

//   const removeField = (field, index) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index)
//     }));
//   };

//   const updateField = (field, index, value, subField = null) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].map((item, i) => 
//         i === index ? (subField ? { ...item, [subField]: value } : value) : item
//       )
//     }));
//   };

//   const handleSaveProduct = async () => {
//     if (!formData.title || !formData.category_id) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       // ✅ Create product data (the JSON part) - FIXED VERSION
//       const productData = {
//         title: formData.title.trim(),
//         category_id: parseInt(formData.category_id),
//         description: formData.description.trim() || "Product Description",
//         nutrition: formData.nutrition
//           .filter(n => {
//             // Safely check if name exists and is not empty
//             const hasName = n.name && n.name.trim().length > 0;
            
//             // Safely check if any nutrition value exists
//             const hasValues = 
//               (n.per_100g && n.per_100g.trim().length > 0) ||
//               (n.ri_percent_100g && n.ri_percent_100g.trim().length > 0) ||
//               (n.portion && n.portion.trim().length > 0) ||
//               (n.ri_percent_portion && n.ri_percent_portion.trim().length > 0);
            
//             return hasName && hasValues;
//           })
//           .map(n => ({
//             name: n.name ? n.name.trim() : '',
//             per_100g: n.per_100g ? n.per_100g.trim() : '',
//             ri_percent_100g: n.ri_percent_100g ? n.ri_percent_100g.trim() : '',
//             portion: n.portion ? n.portion.trim() : '',
//             ri_percent_portion: n.ri_percent_portion ? n.ri_percent_portion.trim() : ''
//           })),
//         ingredients: formData.ingredients
//           .filter(i => i && i.trim().length > 0)
//           .map(i => i.trim())
//       };

//       // ✅ Add default values if empty
//       if (productData.nutrition.length === 0) {
//         productData.nutrition = [
//           { 
//             name: "Fat", 
//             per_100g: "21.5g", 
//             ri_percent_100g: "31", 
//             portion: "8.6g", 
//             ri_percent_portion: "12" 
//           }
//         ];
//       }

//       if (productData.ingredients.length === 0) {
//         productData.ingredients = ["Ingredient 1", "Ingredient 2"];
//       }

//       // ✅ Create FormData (as required by backend)
//       const formdata = new FormData();
//       formdata.append("data", JSON.stringify(productData));

//       // Append new images
//       images.forEach((img) => formdata.append("images", img));

//       console.log("🚀 Sending FormData payload:", productData);

//       let result;
//       if (editingId) {
//         // Update existing product
//         result = await UpdateProduct(editingId, formdata);
//         console.log("🎉 Product updated successfully:", result);
        
//         // Update local state
//         setProducts(prev => prev.map(product => 
//           product.id === editingId 
//             ? {
//                 ...product,
//                 title: formData.title,
//                 category_id: parseInt(formData.category_id),
//                 description: formData.description,
//                 nutrition: formData.nutrition,
//                 ingredients: formData.ingredients,
//                 images: [...existingImages, ...selectedImages.map(file => URL.createObjectURL(file))]
//               }
//             : product
//         ));
//       } else {
//         // Create new product
//         result = await CreateProduct(formdata);
//         console.log("🎉 Product created successfully:", result);
        
//         // Add new product to local state (you might want to refetch instead)
//         const newProduct = {
//           id: result.data?.id || Date.now(), // Use actual ID from response
//           title: formData.title,
//           category_id: parseInt(formData.category_id),
//           description: formData.description,
//           nutrition: formData.nutrition,
//           ingredients: formData.ingredients,
//           images: selectedImages.map(file => URL.createObjectURL(file)),
//           createdAt: new Date().toISOString()
//         };
//         setProducts(prev => [...prev, newProduct]);
//       }

//       // ✅ Reset form
//       setIsCreating(false);
//       setEditingId(null);
//       setFormData({
//         title: '',
//         category_id: '',
//         description: '',
//         nutrition: [{ 
//           name: '', 
//           per_100g: '', 
//           ri_percent_100g: '', 
//           portion: '', 
//           ri_percent_portion: '' 
//         }],
//         ingredients: ['']
//       });
//       setSelectedImages([]);
//       setImages([]);
//       setExistingImages([]);

//     } catch (error) {
//       console.error("❌ Error saving product:", error);
//       if (error.response) {
//         console.error("📊 Error response:", error.response.data);
//         console.error("🔍 Full error details:", error.response.data.detail);

//         if (error.response.data?.detail) {
//           const errorMessages = error.response.data.detail.map(err => err.msg).join(", ");
//           alert(`Validation Error: ${errorMessages}`);
//         } else {
//           alert(`Error: ${error.response.data?.message || 'Failed to save product'}`);
//         }
//       } else {
//         alert("Network Error: Failed to connect to server");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingId(product.id);
//     setIsCreating(false);
//     setFormData({
//       title: product.title,
//       category_id: product.category_id.toString(),
//       description: product.description,
//       nutrition: product.nutrition && product.nutrition.length > 0 ? product.nutrition : [{ 
//         name: '', 
//         per_100g: '', 
//         ri_percent_100g: '', 
//         portion: '', 
//         ri_percent_portion: '' 
//       }],
//       ingredients: product.ingredients && product.ingredients.length > 0 ? product.ingredients : ['']
//     });
//     setSelectedImages([]);
//     setImages([]);
//     setExistingImages(product.images || []);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       setDeletingId(id);
//       try {
//         // Call DeleteProduct API
//         const response = await DeleteProduct(id);
        
//         if (response.success === 1) {
//           // Remove product from local state
//           setProducts(prev => prev.filter(product => product.id !== id));
//           console.log("🗑️ Product deleted successfully");
//         } else {
//           alert('Failed to delete product');
//         }
//       } catch (error) {
//         console.error('Error deleting product:', error);
//         alert('Failed to delete product');
//       } finally {
//         setDeletingId(null);
//       }
//     }
//   };

//   const handleCancel = () => {
//     setIsCreating(false);
//     setEditingId(null);
//     setFormData({
//       title: '',
//       category_id: '',
//       description: '',
//       nutrition: [{ 
//         name: '', 
//         per_100g: '', 
//         ri_percent_100g: '', 
//         portion: '', 
//         ri_percent_portion: '' 
//       }],
//       ingredients: ['']
//     });
//     setSelectedImages([]);
//     setImages([]);
//     setExistingImages([]);
//   };

//   const inputVariants = {
//     focus: {
//       scale: 1.02,
//       boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center"
//       >
//         <div>
//           <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">Products</h3>
//           <p className="text-[#8B5E3C]/70 text-lg mt-2">Manage your natural food products</p>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "100px" }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mt-4"
//           />
//         </div>
        
//         <motion.button
//           whileHover={{ 
//             scale: 1.05,
//             boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
//           }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleCreate}
//           className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl"
//         >
//           <Plus size={24} />
//           <span>Add Product</span>
//         </motion.button>
//       </motion.div>

//       {/* Create/Edit Form */}
//       <AnimatePresence>
//         {(isCreating || editingId) && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
//           >
//             <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-6">
//               {editingId ? 'Edit Product' : 'Create New Product'}
//             </h4>
            
//             <div className="space-y-8">
//               {/* Basic Information */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                     Product Title *
//                   </label>
//                   <motion.input
//                     variants={inputVariants}
//                     whileFocus="focus"
//                     type="text"
//                     value={formData.title}
//                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                     placeholder="Enter product title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                     Category *
//                   </label>
//                   <motion.select
//                     variants={inputVariants}
//                     whileFocus="focus"
//                     value={formData.category_id}
//                     onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
//                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                   >
//                     <option value="">Select Category</option>
//                     {categories.map(category => (
//                       <option key={category.id} value={category.id}>
//                         {category.category}
//                       </option>
//                     ))}
//                   </motion.select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                   Description
//                 </label>
//                 <motion.textarea
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   rows={4}
//                   className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                   placeholder="Enter product description"
//                 />
//               </div>

//               {/* Image Upload */}
//               <div>
//                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                   Product Images
//                 </label>
                
//                 {/* Existing Images (only in edit mode) */}
//                 {editingId && existingImages.length > 0 && (
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                       Existing Images
//                     </label>
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="grid grid-cols-2 md:grid-cols-4 gap-4"
//                     >
//                       {existingImages.map((imageUrl, index) => (
//                         <motion.div
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           className="relative group"
//                         >
//                           <img
//                             src={imageUrl}
//                             alt={`Existing ${index}`}
//                             className="w-full h-24 object-cover rounded-2xl"
//                           />
//                           <motion.button
//                             whileHover={{ scale: 1.2 }}
//                             onClick={() => removeExistingImage(index)}
//                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
//                           >
//                             <X size={14} />
//                           </motion.button>
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   </div>
//                 )}

//                 {/* Image Upload Area */}
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="border-2 border-dashed border-[#8B5E3C]/30 rounded-2xl p-8 text-center hover:border-[#8B5E3C]/50 transition-colors cursor-pointer"
//                 >
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                     id="product-images"
//                   />
//                   <label htmlFor="product-images" className="cursor-pointer">
//                     <Upload size={48} className="mx-auto text-[#8B5E3C]/50 mb-4" />
//                     <p className="text-[#8B5E3C] font-medium text-lg">
//                       {editingId ? 'Add More Images' : 'Click to upload images'}
//                     </p>
//                     <p className="text-[#8B5E3C]/60 mt-2">Multiple images can be selected</p>
//                   </label>
//                 </motion.div>

//                 {/* Newly Selected Images */}
//                 {selectedImages.length > 0 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-6"
//                   >
//                     <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                       New Images to Upload
//                     </label>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       {selectedImages.map((file, index) => (
//                         <motion.div
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           className="relative group"
//                         >
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={`Preview ${index}`}
//                             className="w-full h-24 object-cover rounded-2xl"
//                           />
//                           <motion.button
//                             whileHover={{ scale: 1.2 }}
//                             onClick={() => removeImage(index)}
//                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
//                           >
//                             <X size={14} />
//                           </motion.button>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </div>

//               {/* Nutrition Information */}
//               <div>
//                 <div className="flex justify-between items-center mb-4">
//                   <label className="block text-sm font-medium text-[#8B5E3C]">
//                     Nutrition Information
//                   </label>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     type="button"
//                     onClick={() => addField('nutrition')}
//                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
//                   >
//                     <Plus size={16} />
//                     <span>Add Nutrition</span>
//                   </motion.button>
//                 </div>

//                 <div className="space-y-4">
//                   {formData.nutrition.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-[#8B5E3C]/20"
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
//                         {/* Nutrient Name */}
//                         <div>
//                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
//                             Nutrient Name
//                           </label>
//                           <motion.input
//                             variants={inputVariants}
//                             whileFocus="focus"
//                             type="text"
//                             value={item.name || ''}
//                             onChange={(e) => updateField('nutrition', index, e.target.value, 'name')}
//                             placeholder="e.g., Fat, Protein"
//                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
//                           />
//                         </div>

//                         {/* PER 100 G */}
//                         <div>
//                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
//                             PER 100 G
//                           </label>
//                           <motion.input
//                             variants={inputVariants}
//                             whileFocus="focus"
//                             type="text"
//                             value={item.per_100g || ''}
//                             onChange={(e) => updateField('nutrition', index, e.target.value, 'per_100g')}
//                             placeholder="e.g., 21.5g"
//                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
//                           />
//                         </div>

//                         {/* RI%* FOR 100 G */}
//                         <div>
//                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
//                             RI%* FOR 100 G
//                           </label>
//                           <motion.input
//                             variants={inputVariants}
//                             whileFocus="focus"
//                             type="text"
//                             value={item.ri_percent_100g || ''}
//                             onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_100g')}
//                             placeholder="e.g., 31"
//                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
//                           />
//                         </div>

//                         {/* 1 PORTION (40 G) */}
//                         <div>
//                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
//                             1 PORTION (40 G)
//                           </label>
//                           <motion.input
//                             variants={inputVariants}
//                             whileFocus="focus"
//                             type="text"
//                             value={item.portion || ''}
//                             onChange={(e) => updateField('nutrition', index, e.target.value, 'portion')}
//                             placeholder="e.g., 8.6g"
//                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
//                           />
//                         </div>

//                         {/* RI%* FOR 40 G */}
//                         <div>
//                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
//                             RI%* FOR 40 G
//                           </label>
//                           <motion.input
//                             variants={inputVariants}
//                             whileFocus="focus"
//                             type="text"
//                             value={item.ri_percent_portion || ''}
//                             onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_portion')}
//                             placeholder="e.g., 12"
//                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
//                           />
//                         </div>

//                         {/* Remove Button */}
//                         <div className="flex justify-end">
//                           {formData.nutrition.length > 1 && (
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               type="button"
//                               onClick={() => removeField('nutrition', index)}
//                               className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
//                             >
//                               <X size={16} />
//                             </motion.button>
//                           )}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Ingredients Information */}
//               <div>
//                 <div className="flex justify-between items-center mb-4">
//                   <label className="block text-sm font-medium text-[#8B5E3C]">
//                     Ingredients Information
//                   </label>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     type="button"
//                     onClick={() => addField('ingredients')}
//                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
//                   >
//                     <Plus size={16} />
//                     <span>Add Ingredient</span>
//                   </motion.button>
//                 </div>

//                 <div className="space-y-3">
//                   {formData.ingredients.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="flex space-x-3 items-start"
//                     >
//                       <motion.input
//                         variants={inputVariants}
//                         whileFocus="focus"
//                         type="text"
//                         value={item || ''}
//                         onChange={(e) => updateField('ingredients', index, e.target.value)}
//                         placeholder="Enter ingredient"
//                         className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                       />
//                       {formData.ingredients.length > 1 && (
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           type="button"
//                           onClick={() => removeField('ingredients', index)}
//                           className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
//                         >
//                           <X size={18} />
//                         </motion.button>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="flex space-x-4 pt-6 border-t border-[#8B5E3C]/20"
//               >
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSaveProduct}
//                   disabled={loading || !formData.title.trim() || !formData.category_id}
//                   className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Save size={20} />
//                   <span>{loading ? 'Saving...' : editingId ? 'Update Product' : 'Save Product'}</span>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleCancel}
//                   className="px-8 py-4 border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-2xl font-semibold flex items-center space-x-3 hover:bg-[#8B5E3C]/10 transition-colors"
//                 >
//                   <X size={20} />
//                   <span>Cancel</span>
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence>
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ 
//                 scale: 1.02,
//                 y: -5,
//                 transition: { type: "spring", stiffness: 400 }
//               }}
//               className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group relative"
//             >
//               {/* Delete Loader Overlay */}
//               {deletingId === product.id && (
//                 <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center z-10">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="bg-white p-4 rounded-2xl flex items-center space-x-3"
//                   >
//                     <Loader className="animate-spin text-[#8B5E3C]" size={24} />
//                     <span className="text-[#8B5E3C] font-medium">Deleting...</span>
//                   </motion.div>
//                 </div>
//               )}

//               {product.images && product.images.length > 0 && (
//                 <div className="mb-4 rounded-2xl overflow-hidden">
//                   <img
//                     src={product.images[0]}
//                     alt={product.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               )}

//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{product.title}</h4>
//                   <p className="text-[#8B5E3C]/70 text-sm mt-1">
//                     {categories.find(cat => cat.id === product.category_id)?.category}
//                   </p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => handleEdit(product)}
//                     disabled={deletingId === product.id}
//                     className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors disabled:opacity-50"
//                   >
//                     <Edit2 size={18} />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => handleDelete(product.id)}
//                     disabled={deletingId === product.id}
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
//                   >
//                     {deletingId === product.id ? (
//                       <Loader className="animate-spin" size={18} />
//                     ) : (
//                       <Trash2 size={18} />
//                     )}
//                   </motion.button>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <p className="text-[#8B5E3C]/80 text-sm leading-relaxed line-clamp-2">
//                   {product.description}
//                 </p>

//                 {product.nutrition && product.nutrition.length > 0 && (
//                   <div className="text-xs text-[#8B5E3C]/70">
//                     <strong>Nutrition:</strong> {product.nutrition.slice(0, 2).map(n => `${n.name} (${n.per_100g})`).join(', ')}
//                     {product.nutrition.length > 2 && '...'}
//                   </div>
//                 )}

//                 {product.ingredients && product.ingredients.length > 0 && (
//                   <div className="text-xs text-[#8B5E3C]/70">
//                     <strong>Ingredients:</strong> {product.ingredients.slice(0, 3).join(', ')}
//                     {product.ingredients.length > 3 && '...'}
//                   </div>
//                 )}

//                 <div className="text-xs text-[#8B5E3C]/60">
//                   Created: {new Date(product.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {products.length === 0 && !isCreating && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-16"
//         >
//           <div className="text-[#8B5E3C]/20 mb-4">
//             <ShoppingBag size={80} className="mx-auto" />
//           </div>
//           <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">No Products Yet</h4>
//           <p className="text-[#8B5E3C]/70 text-lg">Create your first product to get started</p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ProductManagement;



// src/components/admin/ProductManagement.jsx


  // import React, { useState, useEffect } from 'react';
  // import { motion, AnimatePresence } from 'framer-motion';
  // import { Plus, Edit2, Trash2, Save, X, Upload, ShoppingBag, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
  // import { useAPI } from '../Context/AuthContext';

  // const ProductCard = ({ product, categories, onEdit, onDelete, isDeleting }) => {
  //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   const handlePrev = () => {
  //     setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  //   };

  //   const handleNext = () => {
  //     setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  //   };

  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: -20 }}
  //       whileHover={{ 
  //         scale: 1.02,
  //         y: -5,
  //         transition: { type: "spring", stiffness: 400 }
  //       }}
  //       className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group relative"
  //     >
  //       {/* Delete Loader Overlay */}
  //       {isDeleting && (
  //         <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center z-10">
  //           <motion.div
  //             initial={{ opacity: 0, scale: 0.8 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             className="bg-white p-4 rounded-2xl flex items-center space-x-3"
  //           >
  //             <Loader className="animate-spin text-[#8B5E3C]" size={24} />
  //             <span className="text-[#8B5E3C] font-medium">Deleting...</span>
  //           </motion.div>
  //         </div>
  //       )}

  //       {product.images && product.images.length > 0 && (
  //         <div className="mb-4 rounded-2xl overflow-hidden relative">
  //           <img
  //             src={product.images[currentImageIndex]}
  //             alt={`${product.title} image ${currentImageIndex + 1}`}
  //             className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
  //           />
  //           {product.images.length > 1 && (
  //             <>
  //               <motion.button
  //                 whileHover={{ scale: 1.1 }}
  //                 whileTap={{ scale: 0.9 }}
  //                 onClick={handlePrev}
  //                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 text-[#8B5E3C] p-2 rounded-full shadow-md"
  //               >
  //                 <ChevronLeft size={20} />
  //               </motion.button>
  //               <motion.button
  //                 whileHover={{ scale: 1.1 }}
  //                 whileTap={{ scale: 0.9 }}
  //                 onClick={handleNext}
  //                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 text-[#8B5E3C] p-2 rounded-full shadow-md"
  //               >
  //                 <ChevronRight size={20} />
  //               </motion.button>
  //             </>
  //           )}
  //         </div>
  //       )}

  //       <div className="flex justify-between items-start mb-4">
  //         <div>
  //           <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{product.title}</h4>
  //           <p className="text-[#8B5E3C]/70 text-sm mt-1">
  //             {categories.find(cat => cat.id === product.category_id)?.category}
  //           </p>
  //         </div>
  //         <div className="flex space-x-2">
  //           <motion.button
  //             whileHover={{ scale: 1.1 }}
  //             whileTap={{ scale: 0.9 }}
  //             onClick={() => onEdit(product)}
  //             disabled={isDeleting}
  //             className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors disabled:opacity-50"
  //           >
  //             <Edit2 size={18} />
  //           </motion.button>
  //           <motion.button
  //             whileHover={{ scale: 1.1 }}
  //             whileTap={{ scale: 0.9 }}
  //             onClick={() => onDelete(product.id)}
  //             disabled={isDeleting}
  //             className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
  //           >
  //             {isDeleting ? (
  //               <Loader className="animate-spin" size={18} />
  //             ) : (
  //               <Trash2 size={18} />
  //             )}
  //           </motion.button>
  //         </div>
  //       </div>

  //       <div className="space-y-3">
  //         <p className="text-[#8B5E3C]/80 text-sm leading-relaxed line-clamp-2">
  //           {product.description}
  //         </p>

  //         {product.nutrition && product.nutrition.length > 0 && (
  //           <div className="text-xs text-[#8B5E3C]/70">
  //             <strong>Nutrition:</strong> {product.nutrition.slice(0, 2).map(n => `${n.name} (${n.per_100g})`).join(', ')}
  //             {product.nutrition.length > 2 && '...'}
  //           </div>
  //         )}

  //         {product.ingredients && product.ingredients.length > 0 && (
  //           <div className="text-xs text-[#8B5E3C]/70">
  //             <strong>Ingredients:</strong> {product.ingredients.slice(0, 3).join(', ')}
  //             {product.ingredients.length > 3 && '...'}
  //           </div>
  //         )}

  //         <div className="text-xs text-[#8B5E3C]/60">
  //           Created: {new Date(product.createdAt).toLocaleDateString()}
  //         </div>
  //       </div>
  //     </motion.div>
  //   );
  // };

  // const ProductManagement = () => {
  //   const [products, setProducts] = useState([]);
  //   const { CreateProduct, ListProducts, UpdateProduct, DeleteProduct, ListCategories } = useAPI();
  //   const [categories, setCategories] = useState([]);
  //   const [isCreating, setIsCreating] = useState(false);
  //   const [editingId, setEditingId] = useState(null);
  //   const [selectedImages, setSelectedImages] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [images, setImages] = useState([]);
  //   const [existingImages, setExistingImages] = useState([]);
  //   const [deletingId, setDeletingId] = useState(null);
  //   const [formData, setFormData] = useState({
  //     title: '',
  //     category_id: '',
  //     description: '',
  //     nutrition: [{ 
  //       name: '', 
  //       per_100g: '', 
  //       ri_percent_100g: '', 
  //       portion: '', 
  //       ri_percent_portion: '' 
  //     }],
  //     ingredients: ['']
  //   });

  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       try {
  //         const response = await ListCategories();
  //         if (response.success === 1 && response.data) {
  //           const formattedCategories = response.data.map(item => ({
  //             id: item.id,
  //             category: item.title
  //           }));
  //           setCategories(formattedCategories);
  //         }
  //       } catch (error) {
  //         console.error('Error fetching categories:', error);
  //         setCategories([
  //           { id: 1, category: 'Granola 360GR' },
  //           { id: 2, category: 'Gluten Free Granola' },
  //           { id: 3, category: 'Gluten Free Cookie' },
  //           { id: 4, category: 'Granola Bites' }
  //         ]);
  //       }
  //     };

  //     const fetchProducts = async () => {
  //       try {
  //         const response = await ListProducts();
  //         if (response.success === 1 && response.data) {
  //           const formattedProducts = response.data.map(item => ({
  //             id: item.id,
  //             title: item.title,
  //             category_id: item.category_id,
  //             description: item.description,
  //             nutrition: item.nutrition,
  //             ingredients: item.ingredients,
  //             images: item.images.map(img => img.original),
  //             createdAt: item.created_at
  //           }));
  //           setProducts(formattedProducts);
  //         }
  //       } catch (error) {
  //         console.error('Error fetching products:', error);
  //       }
  //     };

  //     fetchCategories();
  //     fetchProducts();
  //   }, [ListCategories, ListProducts]);

  //   const handleCreate = () => {
  //     setIsCreating(true);
  //     setEditingId(null);
  //     setFormData({
  //       title: '',
  //       category_id: '',
  //       description: '',
  //       nutrition: [{ 
  //         name: '', 
  //         per_100g: '', 
  //         ri_percent_100g: '', 
  //         portion: '', 
  //         ri_percent_portion: '' 
  //       }],
  //       ingredients: ['']
  //     });
  //     setSelectedImages([]);
  //     setImages([]);
  //     setExistingImages([]);
  //   };

  //   const handleImageUpload = (e) => {
  //     const files = Array.from(e.target.files);
  //     setSelectedImages(prev => [...prev, ...files]);
  //     setImages(prev => [...prev, ...files]);
  //   };

  //   const removeImage = (index) => {
  //     setSelectedImages(prev => prev.filter((_, i) => i !== index));
  //     setImages(prev => prev.filter((_, i) => i !== index));
  //   };

  //   const removeExistingImage = (index) => {
  //     setExistingImages(prev => prev.filter((_, i) => i !== index));
  //   };

  //   const addField = (field) => {
  //     setFormData(prev => ({
  //       ...prev,
  //       [field]: [...prev[field], field === 'nutrition' ? { 
  //         name: '', 
  //         per_100g: '', 
  //         ri_percent_100g: '', 
  //         portion: '', 
  //         ri_percent_portion: '' 
  //       } : '']
  //     }));
  //   };

  //   const removeField = (field, index) => {
  //     setFormData(prev => ({
  //       ...prev,
  //       [field]: prev[field].filter((_, i) => i !== index)
  //     }));
  //   };

  //   const updateField = (field, index, value, subField = null) => {
  //     setFormData(prev => ({
  //       ...prev,
  //       [field]: prev[field].map((item, i) => 
  //         i === index ? (subField ? { ...item, [subField]: value } : value) : item
  //       )
  //     }));
  //   };

  //   const handleSaveProduct = async () => {
  //     if (!formData.title || !formData.category_id) {
  //       alert('Please fill in all required fields');
  //       return;
  //     }

  //     setLoading(true);
  //     try {
  //       // Create product data (the JSON part) - FIXED VERSION
  //       const productData = {
  //         title: formData.title.trim(),
  //         category_id: parseInt(formData.category_id),
  //         description: formData.description.trim() || "Product Description",
  //         nutrition: formData.nutrition
  //           .filter(n => {
  //             // Safely check if name exists and is not empty
  //             const hasName = n.name && n.name.trim().length > 0;
              
  //             // Safely check if any nutrition value exists
  //             const hasValues = 
  //               (n.per_100g && n.per_100g.trim().length > 0) ||
  //               (n.ri_percent_100g && n.ri_percent_100g.trim().length > 0) ||
  //               (n.portion && n.portion.trim().length > 0) ||
  //               (n.ri_percent_portion && n.ri_percent_portion.trim().length > 0);
              
  //             return hasName && hasValues;
  //           })
  //           .map(n => ({
  //             name: n.name ? n.name.trim() : '',
  //             per_100g: n.per_100g ? n.per_100g.trim() : '',
  //             ri_percent_100g: n.ri_percent_100g ? n.ri_percent_100g.trim() : '',
  //             portion: n.portion ? n.portion.trim() : '',
  //             ri_percent_portion: n.ri_percent_portion ? n.ri_percent_portion.trim() : ''
  //           })),
        
  //         ingredients: formData.ingredients
  //           .filter(i => i && i.trim().length > 0)
  //           .map(i => i.trim())
  //       };

  //       // Add default values if empty
  //       if (productData.nutrition.length === 0) {
  //         productData.nutrition = [
  //           { 
  //             name: "Fat", 
  //             per_100g: "21.5g", 
  //             ri_percent_100g: "31", 
  //             portion: "8.6g", 
  //             ri_percent_portion: "12" 
  //           }
  //         ];
  //       }

  //       if (productData.ingredients.length === 0) {
  //         productData.ingredients = ["Ingredient 1", "Ingredient 2"];
  //       }

  //       // Create FormData (as required by backend)
  //       const formdata = new FormData();
  //       formdata.append("data", JSON.stringify(productData));

  //       // Append new images
  //       images.forEach((img) => formdata.append("images", img));

  //       console.log("Sending FormData payload:", productData);

  //       let result;
  //       if (editingId) {
  //         // Update existing product
  //         result = await UpdateProduct(editingId, formdata);
  //         console.log("Product updated successfully:", result);
          
  //         // Update local state
  //         setProducts(prev => prev.map(product => 
  //           product.id === editingId 
  //             ? {
  //                 ...product,
  //                 title: formData.title,
  //                 category_id: parseInt(formData.category_id),
  //                 description: formData.description,
  //                 nutrition: formData.nutrition,
  //                 ingredients: formData.ingredients,
  //                 images: [...existingImages, ...selectedImages.map(file => URL.createObjectURL(file))]
  //               }
  //             : product
  //         ));
  //       } else {
  //         // Create new product
  //         result = await CreateProduct(formdata);
  //         console.log("Product created successfully:", result);
          
  //         // Add new product to local state (you might want to refetch instead)
  //         const newProduct = {
  //           id: result.data?.id || Date.now(), // Use actual ID from response
  //           title: formData.title,
  //           category_id: parseInt(formData.category_id),
  //           description: formData.description,
  //           nutrition: formData.nutrition,
  //           ingredients: formData.ingredients,
  //           images: selectedImages.map(file => URL.createObjectURL(file)),
  //           createdAt: new Date().toISOString()
  //         };
  //         setProducts(prev => [...prev, newProduct]);
  //       }

  //       // Reset form
  //       setIsCreating(false);
  //       setEditingId(null);
  //       setFormData({
  //         title: '',
  //         category_id: '',
  //         description: '',
  //         nutrition: [{ 
  //           name: '', 
  //           per_100g: '', 
  //           ri_percent_100g: '', 
  //           portion: '', 
  //           ri_percent_portion: '' 
  //         }],
  //         ingredients: ['']
  //       });
  //       setSelectedImages([]);
  //       setImages([]);
  //       setExistingImages([]);

  //     } catch (error) {
  //       console.error("Error saving product:", error);
  //       if (error.response) {
  //         console.error("Error response:", error.response.data);
  //         console.error("Full error details:", error.response.data.detail);

  //         if (error.response.data?.detail) {
  //           const errorMessages = error.response.data.detail.map(err => err.msg).join(", ");
  //           alert(`Validation Error: ${errorMessages}`);
  //         } else {
  //           alert(`Error: ${error.response.data?.message || 'Failed to save product'}`);
  //         }
  //       } else {
  //         alert("Network Error: Failed to connect to server");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleEdit = (product) => {
  //     setEditingId(product.id);
  //     setIsCreating(false);
  //     setFormData({
  //       title: product.title,
  //       category_id: product.category_id.toString(),
  //       description: product.description,
  //       nutrition: product.nutrition && product.nutrition.length > 0 ? product.nutrition : [{ 
  //         name: '', 
  //         per_100g: '', 
  //         ri_percent_100g: '', 
  //         portion: '', 
  //         ri_percent_portion: '' 
  //       }],
  //       ingredients: product.ingredients && product.ingredients.length > 0 ? product.ingredients : ['']
  //     });
  //     setSelectedImages([]);
  //     setImages([]);
  //     setExistingImages(product.images || []);
  //   };

  //   const handleDelete = async (id) => {
  //     if (window.confirm('Are you sure you want to delete this product?')) {
  //       setDeletingId(id);
  //       try {
  //         // Call DeleteProduct API
  //         const response = await DeleteProduct(id);
          
  //         if (response.success === 1) {
  //           // Remove product from local state
  //           setProducts(prev => prev.filter(product => product.id !== id));
  //           console.log("Product deleted successfully");
  //         } else {
  //           alert('Failed to delete product');
  //         }
  //       } catch (error) {
  //         console.error('Error deleting product:', error);
  //         alert('Failed to delete product');
  //       } finally {
  //         setDeletingId(null);
  //       }
  //     }
  //   };

  //   const handleCancel = () => {
  //     setIsCreating(false);
  //     setEditingId(null);
  //     setFormData({
  //       title: '',
  //       category_id: '',
  //       description: '',
  //       nutrition: [{ 
  //         name: '', 
  //         per_100g: '', 
  //         ri_percent_100g: '', 
  //         portion: '', 
  //         ri_percent_portion: '' 
  //       }],
  //       ingredients: ['']
  //     });
  //     setSelectedImages([]);
  //     setImages([]);
  //     setExistingImages([]);
  //   };

  //   const inputVariants = {
  //     focus: {
  //       scale: 1.02,
  //       boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
  //       transition: {
  //         type: "spring",
  //         stiffness: 400,
  //         damping: 25
  //       }
  //     }
  //   };

  //   return (
  //     <div className="space-y-8">
  //       {/* Header - Now sticky to stay visible on scroll */}
  //       <motion.div
  //         initial={{ opacity: 0, y: -20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sticky top-0 bg-white z-10 pb-6 border-b border-[#8B5E3C]/10"
  //       >
  //         <div className="w-full sm:w-auto">
  //           <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">Products</h3>
  //           <p className="text-[#8B5E3C]/70 text-lg mt-2">Manage your natural food products</p>
  //           <motion.div
  //             initial={{ width: 0 }}
  //             animate={{ width: "100px" }}
  //             transition={{ delay: 0.5, duration: 0.8 }}
  //             className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mt-4"
  //           />
  //         </div>
          
  //         <motion.button
  //           whileHover={{ 
  //             scale: 1.05,
  //             boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
  //           }}
  //           whileTap={{ scale: 0.95 }}
  //           onClick={handleCreate}
  //           className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl w-full sm:w-auto justify-center"
  //         >
  //           <Plus size={24} />
  //           <span>Add Product</span>
  //         </motion.button>
  //       </motion.div>

  //       {/* Create/Edit Form */}
  //       <AnimatePresence>
  //         {(isCreating || editingId) && (
  //           <motion.div
  //             initial={{ opacity: 0, height: 0 }}
  //             animate={{ opacity: 1, height: 'auto' }}
  //             exit={{ opacity: 0, height: 0 }}
  //             className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
  //           >
  //             <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-6">
  //               {editingId ? 'Edit Product' : 'Create New Product'}
  //             </h4>
              
  //             <div className="space-y-8">
  //               {/* Basic Information */}
  //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //                 <div>
  //                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                     Product Title *
  //                   </label>
  //                   <motion.input
  //                     variants={inputVariants}
  //                     whileFocus="focus"
  //                     type="text"
  //                     value={formData.title}
  //                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
  //                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
  //                     placeholder="Enter product title"
  //                   />
  //                 </div>

  //                 <div>
  //                   <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                     Category *
  //                   </label>
  //                   <motion.select
  //                     variants={inputVariants}
  //                     whileFocus="focus"
  //                     value={formData.category_id}
  //                     onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
  //                     className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
  //                   >
  //                     <option value="">Select Category</option>
  //                     {categories.map(category => (
  //                       <option key={category.id} value={category.id}>
  //                         {category.category}
  //                       </option>
  //                     ))}
  //                   </motion.select>
  //                 </div>
  //               </div>

  //               <div>
  //                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                   Description
  //                 </label>
  //                 <motion.textarea
  //                   variants={inputVariants}
  //                   whileFocus="focus"
  //                   value={formData.description}
  //                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
  //                   rows={4}
  //                   className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
  //                   placeholder="Enter product description"
  //                 />
  //               </div>

  //               {/* Image Upload */}
  //               <div>
  //                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                   Product Images
  //                 </label>
                  
  //                 {/* Existing Images (only in edit mode) */}
  //                 {editingId && existingImages.length > 0 && (
  //                   <div className="mb-6">
  //                     <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                       Existing Images
  //                     </label>
  //                     <motion.div
  //                       initial={{ opacity: 0, y: 20 }}
  //                       animate={{ opacity: 1, y: 0 }}
  //                       className="grid grid-cols-2 md:grid-cols-4 gap-4"
  //                     >
  //                       {existingImages.map((imageUrl, index) => (
  //                         <motion.div
  //                           key={index}
  //                           whileHover={{ scale: 1.05 }}
  //                           className="relative group"
  //                         >
  //                           <img
  //                             src={imageUrl}
  //                             alt={`Existing ${index}`}
  //                             className="w-full h-24 object-cover rounded-2xl"
  //                           />
  //                           <motion.button
  //                             whileHover={{ scale: 1.2 }}
  //                             onClick={() => removeExistingImage(index)}
  //                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
  //                           >
  //                             <X size={14} />
  //                           </motion.button>
  //                         </motion.div>
  //                       ))}
  //                     </motion.div>
  //                   </div>
  //                 )}

  //                 {/* Image Upload Area */}
  //                 <motion.div
  //                   whileHover={{ scale: 1.02 }}
  //                   className="border-2 border-dashed border-[#8B5E3C]/30 rounded-2xl p-8 text-center hover:border-[#8B5E3C]/50 transition-colors cursor-pointer"
  //                 >
  //                   <input
  //                     type="file"
  //                     multiple
  //                     accept="image/*"
  //                     onChange={handleImageUpload}
  //                     className="hidden"
  //                     id="product-images"
  //                   />
  //                   <label htmlFor="product-images" className="cursor-pointer">
  //                     <Upload size={48} className="mx-auto text-[#8B5E3C]/50 mb-4" />
  //                     <p className="text-[#8B5E3C] font-medium text-lg">
  //                       {editingId ? 'Add More Images' : 'Click to upload images'}
  //                     </p>
  //                     <p className="text-[#8B5E3C]/60 mt-2">Multiple images can be selected</p>
  //                   </label>
  //                 </motion.div>

  //                 {/* Newly Selected Images */}
  //                 {selectedImages.length > 0 && (
  //                   <motion.div
  //                     initial={{ opacity: 0, y: 20 }}
  //                     animate={{ opacity: 1, y: 0 }}
  //                     className="mt-6"
  //                   >
  //                     <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
  //                       New Images to Upload
  //                     </label>
  //                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  //                       {selectedImages.map((file, index) => (
  //                         <motion.div
  //                           key={index}
  //                           whileHover={{ scale: 1.05 }}
  //                           className="relative group"
  //                         >
  //                           <img
  //                             src={URL.createObjectURL(file)}
  //                             alt={`Preview ${index}`}
  //                             className="w-full h-24 object-cover rounded-2xl"
  //                           />
  //                           <motion.button
  //                             whileHover={{ scale: 1.2 }}
  //                             onClick={() => removeImage(index)}
  //                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
  //                           >
  //                             <X size={14} />
  //                           </motion.button>
  //                         </motion.div>
  //                       ))}
  //                     </div>
  //                   </motion.div>
  //                 )}
  //               </div>

  //               {/* Nutrition Information */}
  //               <div>
  //                 <div className="flex justify-between items-center mb-4">
  //                   <label className="block text-sm font-medium text-[#8B5E3C]">
  //                     Nutrition Information
  //                   </label>
  //                   <motion.button
  //                     whileHover={{ scale: 1.05 }}
  //                     whileTap={{ scale: 0.95 }}
  //                     type="button"
  //                     onClick={() => addField('nutrition')}
  //                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
  //                   >
  //                     <Plus size={16} />
  //                     <span>Add Nutrition</span>
  //                   </motion.button>
  //                 </div>

  //                 <div className="space-y-4">
  //                   {formData.nutrition.map((item, index) => (
  //                     <motion.div
  //                       key={index}
  //                       initial={{ opacity: 0, x: -20 }}
  //                       animate={{ opacity: 1, x: 0 }}
  //                       className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-[#8B5E3C]/20"
  //                     >
  //                       <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
  //                         {/* Nutrient Name */}
  //                         <div>
  //                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
  //                             Nutrient Name
  //                           </label>
  //                           <motion.input
  //                             variants={inputVariants}
  //                             whileFocus="focus"
  //                             type="text"
  //                             value={item.name || ''}
  //                             onChange={(e) => updateField('nutrition', index, e.target.value, 'name')}
  //                             placeholder="e.g., Fat, Protein"
  //                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
  //                           />
  //                         </div>

  //                         {/* PER 100 G */}
  //                         <div>
  //                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
  //                             PER 100 G
  //                           </label>
  //                           <motion.input
  //                             variants={inputVariants}
  //                             whileFocus="focus"
  //                             type="text"
  //                             value={item.per_100g || ''}
  //                             onChange={(e) => updateField('nutrition', index, e.target.value, 'per_100g')}
  //                             placeholder="e.g., 21.5g"
  //                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
  //                           />
  //                         </div>

  //                         {/* RI%* FOR 100 G */}
  //                         <div>
  //                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
  //                             RI%* FOR 100 G
  //                           </label>
  //                           <motion.input
  //                             variants={inputVariants}
  //                             whileFocus="focus"
  //                             type="text"
  //                             value={item.ri_percent_100g || ''}
  //                             onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_100g')}
  //                             placeholder="e.g., 31"
  //                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
  //                           />
  //                         </div>

  //                         {/* 1 PORTION (40 G) */}
  //                         <div>
  //                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
  //                             1 PORTION (40 G)
  //                           </label>
  //                           <motion.input
  //                             variants={inputVariants}
  //                             whileFocus="focus"
  //                             type="text"
  //                             value={item.portion || ''}
  //                             onChange={(e) => updateField('nutrition', index, e.target.value, 'portion')}
  //                             placeholder="e.g., 8.6g"
  //                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
  //                           />
  //                         </div>

  //                         {/* RI%* FOR 40 G */}
  //                         <div>
  //                           <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
  //                             RI%* FOR 40 G
  //                           </label>
  //                           <motion.input
  //                             variants={inputVariants}
  //                             whileFocus="focus"
  //                             type="text"
  //                             value={item.ri_percent_portion || ''}
  //                             onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_portion')}
  //                             placeholder="e.g., 12"
  //                             className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
  //                           />
  //                         </div>

  //                         {/* Remove Button */}
  //                         <div className="flex justify-end">
  //                           {formData.nutrition.length > 1 && (
  //                             <motion.button
  //                               whileHover={{ scale: 1.1 }}
  //                               whileTap={{ scale: 0.9 }}
  //                               type="button"
  //                               onClick={() => removeField('nutrition', index)}
  //                               className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
  //                             >
  //                               <X size={16} />
  //                             </motion.button>
  //                           )}
  //                         </div>
  //                       </div>
  //                     </motion.div>
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Ingredients Information */}
  //               <div>
  //                 <div className="flex justify-between items-center mb-4">
  //                   <label className="block text-sm font-medium text-[#8B5E3C]">
  //                     Ingredients Information
  //                   </label>
  //                   <motion.button
  //                     whileHover={{ scale: 1.05 }}
  //                     whileTap={{ scale: 0.95 }}
  //                     type="button"
  //                     onClick={() => addField('ingredients')}
  //                     className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
  //                   >
  //                     <Plus size={16} />
  //                     <span>Add Ingredient</span>
  //                   </motion.button>
  //                 </div>

  //                 <div className="space-y-3">
  //                   {formData.ingredients.map((item, index) => (
  //                     <motion.div
  //                       key={index}
  //                       initial={{ opacity: 0, x: -20 }}
  //                       animate={{ opacity: 1, x: 0 }}
  //                       className="flex space-x-3 items-start"
  //                     >
  //                       <motion.input
  //                         variants={inputVariants}
  //                         whileFocus="focus"
  //                         type="text"
  //                         value={item || ''}
  //                         onChange={(e) => updateField('ingredients', index, e.target.value)}
  //                         placeholder="Enter ingredient"
  //                         className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
  //                       />
  //                       {formData.ingredients.length > 1 && (
  //                         <motion.button
  //                           whileHover={{ scale: 1.1 }}
  //                           whileTap={{ scale: 0.9 }}
  //                           type="button"
  //                           onClick={() => removeField('ingredients', index)}
  //                           className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
  //                         >
  //                           <X size={18} />
  //                         </motion.button>
  //                       )}
  //                     </motion.div>
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Action Buttons */}
  //               <motion.div
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 className="flex space-x-4 pt-6 border-t border-[#8B5E3C]/20"
  //               >
  //                 <motion.button
  //                   whileHover={{ 
  //                     scale: 1.05,
  //                     boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
  //                   }}
  //                   whileTap={{ scale: 0.95 }}
  //                   onClick={handleSaveProduct}
  //                   disabled={loading || !formData.title.trim() || !formData.category_id}
  //                   className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
  //                 >
  //                   <Save size={20} />
  //                   <span>{loading ? 'Saving...' : editingId ? 'Update Product' : 'Save Product'}</span>
  //                 </motion.button>
                  
  //                 <motion.button
  //                   whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
  //                   whileTap={{ scale: 0.95 }}
  //                   onClick={handleCancel}
  //                   className="px-8 py-4 border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-2xl font-semibold flex items-center space-x-3 hover:bg-[#8B5E3C]/10 transition-colors"
  //                 >
  //                   <X size={20} />
  //                   <span>Cancel</span>
  //                 </motion.button>
  //               </motion.div>
  //             </div>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>

  //       {/* Products Grid with Scrollbar */}
  //       <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           <AnimatePresence>
  //             {products.map((product) => (
  //               <ProductCard
  //                 key={product.id}
  //                 product={product}
  //                 categories={categories}
  //                 onEdit={handleEdit}
  //                 onDelete={handleDelete}
  //                 isDeleting={deletingId === product.id}
  //               />
  //             ))}
  //           </AnimatePresence>
  //         </div>
  //       </div>

  //       {products.length === 0 && !isCreating && (
  //         <motion.div
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           className="text-center py-16"
  //         >
  //           <div className="text-[#8B5E3C]/20 mb-4">
  //             <ShoppingBag size={80} className="mx-auto" />
  //           </div>
  //           <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">No Products Yet</h4>
  //           <p className="text-[#8B5E3C]/70 text-lg">Create your first product to get started</p>
  //         </motion.div>
  //       )}
  //     </div>
  //   );
  // };

  // export default ProductManagement;



  import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X, Upload, ShoppingBag, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAPI } from '../Context/AuthContext';

const ProductCard = ({ product, categories, onEdit, onDelete, isDeleting }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group relative"
    >
      {/* Delete Loader Overlay */}
      {isDeleting && (
        <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-2xl flex items-center space-x-3"
          >
            <Loader className="animate-spin text-[#8B5E3C]" size={24} />
            <span className="text-[#8B5E3C] font-medium">Deleting...</span>
          </motion.div>
        </div>
      )}

      {product.images && product.images.length > 0 && (
        <div className="mb-4 rounded-2xl overflow-hidden relative">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.title} image ${currentImageIndex + 1}`}
            className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {product.images.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 text-[#8B5E3C] p-2 rounded-full shadow-md"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 text-[#8B5E3C] p-2 rounded-full shadow-md"
              >
                <ChevronRight size={20} />
              </motion.button>
            </>
          )}
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{product.title}</h4>
          <p className="text-[#8B5E3C]/70 text-sm mt-1">
            {categories.find(cat => cat.id === product.category_id)?.category}
          </p>
        </div>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(product)}
            disabled={isDeleting}
            className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors disabled:opacity-50"
          >
            <Edit2 size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(product.id)}
            disabled={isDeleting}
            className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-50"
          >
            {isDeleting ? (
              <Loader className="animate-spin" size={18} />
            ) : (
              <Trash2 size={18} />
            )}
          </motion.button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[#8B5E3C]/80 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {product.nutrition && product.nutrition.length > 0 && (
          <div className="text-xs text-[#8B5E3C]/70">
            <strong>Nutrition:</strong> {product.nutrition.slice(0, 2).map(n => `${n.name} (${n.per_100g})`).join(', ')}
            {product.nutrition.length > 2 && '...'}
          </div>
        )}

        {product.ingredients && product.ingredients.length > 0 && (
          <div className="text-xs text-[#8B5E3C]/70">
            <strong>Ingredients:</strong> {product.ingredients.slice(0, 3).join(', ')}
            {product.ingredients.length > 3 && '...'}
          </div>
        )}

        <div className="text-xs text-[#8B5E3C]/60">
          Created: {new Date(product.createdAt).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  );
};

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const { CreateProduct, ListProducts, UpdateProduct, DeleteProduct, ListCategories } = useAPI();
  const [categories, setCategories] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [imagesToDelete, setImagesToDelete] = useState([]);
    const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    description: '',
    nutrition: [{ 
      name: '', 
      per_100g: '', 
      ri_percent_100g: '', 
      portion: '', 
      ri_percent_portion: '' 
    }],
    ingredients: ['']
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ListCategories();
        if (response.success === 1 && response.data) {
          const formattedCategories = response.data.map(item => ({
            id: item.id,
            category: item.title
          }));
          setCategories(formattedCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([
          { id: 1, category: 'Granola 360GR' },
          { id: 2, category: 'Gluten Free Granola' },
          { id: 3, category: 'Gluten Free Cookie' },
          { id: 4, category: 'Granola Bites' }
        ]);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await ListProducts();
        if (response.success === 1 && response.data) {
          const formattedProducts = response.data.map(item => ({
            id: item.id,
            title: item.title,
            category_id: item.category_id,
            description: item.description,
            nutrition: item.nutrition,
            ingredients: item.ingredients,
            images: item.images.map(img => img.original),
            imageDetails: item.images, // Store full image details including filenames
            createdAt: item.created_at
          }));
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [ListCategories, ListProducts]);

  // const handleCreate = () => {
  //   setIsCreating(true);
  //   setEditingId(null);
  //   setFormData({
  //     title: '',
  //     category_id: '',
  //     description: '',
  //     nutrition: [{ 
  //       name: '', 
  //       per_100g: '', 
  //       ri_percent_100g: '', 
  //       portion: '', 
  //       ri_percent_portion: '' 
  //     }],
  //     ingredients: ['']
  //   });
  //   setSelectedImages([]);
  //   setImages([]);
  //   setExistingImages([]);
  //   setImagesToDelete([]);
  // };
const handleCreate = () => {
  setIsCreating(true);
  setEditingId(null);
  setFormData({
    title: '',
    category_id: '',
    description: '',
    nutrition: [{ 
      name: '', 
      per_100g: '', 
      ri_percent_100g: '', 
      portion: '', 
      ri_percent_portion: '' 
    }],
    ingredients: ['']
  });
  setSelectedImages([]);
  setImages([]);
  setExistingImages([]);
  setImagesToDelete([]);

  // Add this scroll behavior
  setTimeout(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, 100);
};
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(prev => [...prev, ...files]);
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index) => {
    const imageToRemove = existingImages[index];
    
    // Add the image filename to the delete list for backend
    if (imageToRemove.filename) {
      setImagesToDelete(prev => [...prev, imageToRemove.filename]);
    }
    
    // Remove from frontend display
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  const addField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], field === 'nutrition' ? { 
        name: '', 
        per_100g: '', 
        ri_percent_100g: '', 
        portion: '', 
        ri_percent_portion: '' 
      } : '']
    }));
  };

  const removeField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const updateField = (field, index, value, subField = null) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => 
        i === index ? (subField ? { ...item, [subField]: value } : value) : item
      )
    }));
  };

  const handleSaveProduct = async () => {
    if (!formData.title || !formData.category_id) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Create product data (the JSON part)
      const productData = {
        title: formData.title.trim(),
        category_id: parseInt(formData.category_id),
        description: formData.description.trim() || "Product Description",
        nutrition: formData.nutrition
          .filter(n => {
            const hasName = n.name && n.name.trim().length > 0;
            const hasValues = 
              (n.per_100g && n.per_100g.trim().length > 0) ||
              (n.ri_percent_100g && n.ri_percent_100g.trim().length > 0) ||
              (n.portion && n.portion.trim().length > 0) ||
              (n.ri_percent_portion && n.ri_percent_portion.trim().length > 0);
            
            return hasName && hasValues;
          })
          .map(n => ({
            name: n.name ? n.name.trim() : '',
            per_100g: n.per_100g ? n.per_100g.trim() : '',
            ri_percent_100g: n.ri_percent_100g ? n.ri_percent_100g.trim() : '',
            portion: n.portion ? n.portion.trim() : '',
            ri_percent_portion: n.ri_percent_portion ? n.ri_percent_portion.trim() : ''
          })),
      
        ingredients: formData.ingredients
          .filter(i => i && i.trim().length > 0)
          .map(i => i.trim())
      };

      // Add delete_images array if there are images to delete
      if (editingId && imagesToDelete.length > 0) {
        productData.delete_images = imagesToDelete;
      }

      // Add default values if empty
      if (productData.nutrition.length === 0) {
        productData.nutrition = [
          { 
            name: "Fat", 
            per_100g: "21.5g", 
            ri_percent_100g: "31", 
            portion: "8.6g", 
            ri_percent_portion: "12" 
          }
        ];
      }

      if (productData.ingredients.length === 0) {
        productData.ingredients = ["Ingredient 1", "Ingredient 2"];
      }

      // Create FormData (as required by backend)
      const formdata = new FormData();
      formdata.append("data", JSON.stringify(productData));

      // Append new images
      images.forEach((img) => formdata.append("images", img));

      console.log("Sending FormData payload:", productData);

      let result;
      if (editingId) {
        // Update existing product
        result = await UpdateProduct(editingId, formdata);
        console.log("Product updated successfully:", result);
        
        // Update local state
        setProducts(prev => prev.map(product => 
          product.id === editingId 
            ? {
                ...product,
                title: formData.title,
                category_id: parseInt(formData.category_id),
                description: formData.description,
                nutrition: formData.nutrition,
                ingredients: formData.ingredients,
                images: [...existingImages.map(img => img.url || img.original || img), ...selectedImages.map(file => URL.createObjectURL(file))]
              }
            : product
        ));
      } else {
        // Create new product
        result = await CreateProduct(formdata);
        console.log("Product created successfully:", result);
        
        // Add new product to local state
        const newProduct = {
          id: result.data?.id || Date.now(),
          title: formData.title,
          category_id: parseInt(formData.category_id),
          description: formData.description,
          nutrition: formData.nutrition,
          ingredients: formData.ingredients,
          images: selectedImages.map(file => URL.createObjectURL(file)),
          createdAt: new Date().toISOString()
        };
        setProducts(prev => [...prev, newProduct]);
      }

      // Reset form
      setIsCreating(false);
      setEditingId(null);
      setFormData({
        title: '',
        category_id: '',
        description: '',
        nutrition: [{ 
          name: '', 
          per_100g: '', 
          ri_percent_100g: '', 
          portion: '', 
          ri_percent_portion: '' 
        }],
        ingredients: ['']
      });
      setSelectedImages([]);
      setImages([]);
      setExistingImages([]);
      setImagesToDelete([]);

    } catch (error) {
      console.error("Error saving product:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Full error details:", error.response.data.detail);

        if (error.response.data?.detail) {
          const errorMessages = error.response.data.detail.map(err => err.msg).join(", ");
          alert(`Validation Error: ${errorMessages}`);
        } else {
          alert(`Error: ${error.response.data?.message || 'Failed to save product'}`);
        }
      } else {
        alert("Network Error: Failed to connect to server");
      }
    } finally {
      setLoading(false);
    }
  };

  // const handleEdit = (product) => {
  //   setEditingId(product.id);
  //   setIsCreating(false);
  //   setFormData({
  //     title: product.title,
  //     category_id: product.category_id.toString(),
  //     description: product.description,
  //     nutrition: product.nutrition && product.nutrition.length > 0 ? product.nutrition : [{ 
  //       name: '', 
  //       per_100g: '', 
  //       ri_percent_100g: '', 
  //       portion: '', 
  //       ri_percent_portion: '' 
  //     }],
  //     ingredients: product.ingredients && product.ingredients.length > 0 ? product.ingredients : ['']
  //   });
  //   setSelectedImages([]);
  //   setImages([]);
    
  //   // Store existing images with their full details including filenames
  //   const existingImagesData = product.imageDetails || 
  //     (product.images ? product.images.map(img => ({ 
  //       url: img, 
  //       filename: img.split('/').pop() // Extract filename from URL as fallback
  //     })) : []);
    
  //   setExistingImages(existingImagesData);
  //   setImagesToDelete([]);
  // };

  const handleEdit = (product) => {
  setEditingId(product.id);
  setIsCreating(false);
  setFormData({
    title: product.title,
    category_id: product.category_id.toString(),
    description: product.description,
    nutrition: product.nutrition && product.nutrition.length > 0 ? product.nutrition : [{ 
      name: '', 
      per_100g: '', 
      ri_percent_100g: '', 
      portion: '', 
      ri_percent_portion: '' 
    }],
    ingredients: product.ingredients && product.ingredients.length > 0 ? product.ingredients : ['']
  });
  setSelectedImages([]);
  setImages([]);
  
  // Store existing images with their full details including filenames
  const existingImagesData = product.imageDetails || 
    (product.images ? product.images.map(img => ({ 
      url: img, 
      filename: img.split('/').pop() // Extract filename from URL as fallback
    })) : []);
  
  setExistingImages(existingImagesData);
  setImagesToDelete([]);

  // Add this scroll behavior - scroll after a small delay to ensure form is rendered
  setTimeout(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, 100);
};

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setDeletingId(id);
      try {
        const response = await DeleteProduct(id);
        
        if (response.success === 1) {
          setProducts(prev => prev.filter(product => product.id !== id));
          console.log("Product deleted successfully");
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    setFormData({
      title: '',
      category_id: '',
      description: '',
      nutrition: [{ 
        name: '', 
        per_100g: '', 
        ri_percent_100g: '', 
        portion: '', 
        ri_percent_portion: '' 
      }],
      ingredients: ['']
    });
    setSelectedImages([]);
    setImages([]);
    setExistingImages([]);
    setImagesToDelete([]);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header - Now sticky to stay visible on scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sticky top-0 bg-white z-10 pb-6 border-b border-[#8B5E3C]/10"
      >
        <div className="w-full sm:w-auto">
          <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">Products</h3>
          <p className="text-[#8B5E3C]/70 text-lg mt-2">Manage your natural food products</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mt-4"
          />
        </div>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreate}
          className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl w-full sm:w-auto justify-center"
        >
          <Plus size={24} />
          <span>Add Product</span>
        </motion.button>
      </motion.div>

      {/* Create/Edit Form */}
      <AnimatePresence>
        {(isCreating || editingId) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
          >
            <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-6">
              {editingId ? 'Edit Product' : 'Create New Product'}
            </h4>
            
            <div className="space-y-8">
              {/* Basic Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                    Product Title *
                  </label>
                  <motion.input
                    variants={inputVariants}
                    whileFocus="focus"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                    placeholder="Enter product title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                    Category *
                  </label>
                  <motion.select
                    variants={inputVariants}
                    whileFocus="focus"
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                  Description
                </label>
                <motion.textarea
                  variants={inputVariants}
                  whileFocus="focus"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                  placeholder="Enter product description"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                  Product Images
                </label>
                
                {/* Existing Images (only in edit mode) */}
                {editingId && existingImages.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                      Existing Images (Click × to delete)
                    </label>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      {existingImages.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="relative group"
                        >
                          <img
                            src={image.url || image.original || image}
                            alt={`Existing ${index}`}
                            className="w-full h-24 object-cover rounded-2xl"
                          />
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            onClick={() => removeExistingImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
                          >
                            <X size={14} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </motion.div>
                    {imagesToDelete.length > 0 && (
                      <p className="text-sm text-[#8B5E3C]/70 mt-2">
                        {imagesToDelete.length} image(s) marked for deletion
                      </p>
                    )}
                  </div>
                )}

                {/* Image Upload Area */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-[#8B5E3C]/30 rounded-2xl p-8 text-center hover:border-[#8B5E3C]/50 transition-colors cursor-pointer"
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="product-images"
                  />
                  <label htmlFor="product-images" className="cursor-pointer">
                    <Upload size={48} className="mx-auto text-[#8B5E3C]/50 mb-4" />
                    <p className="text-[#8B5E3C] font-medium text-lg">
                      {editingId ? 'Add More Images' : 'Click to upload images'}
                    </p>
                    <p className="text-[#8B5E3C]/60 mt-2">Multiple images can be selected</p>
                  </label>
                </motion.div>

                {/* Newly Selected Images */}
                {selectedImages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                      New Images to Upload
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedImages.map((file, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="relative group"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index}`}
                            className="w-full h-24 object-cover rounded-2xl"
                          />
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg"
                          >
                            <X size={14} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Nutrition Information */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-[#8B5E3C]">
                    Nutrition Information
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => addField('nutrition')}
                    className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Add Nutrition</span>
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {formData.nutrition.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-[#8B5E3C]/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
                        {/* Nutrient Name */}
                        <div>
                          <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
                            Nutrient Name
                          </label>
                          <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            value={item.name || ''}
                            onChange={(e) => updateField('nutrition', index, e.target.value, 'name')}
                            placeholder="e.g., Fat, Protein"
                            className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
                          />
                        </div>

                        {/* PER 100 G */}
                        <div>
                          <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
                            PER 100 G
                          </label>
                          <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            value={item.per_100g || ''}
                            onChange={(e) => updateField('nutrition', index, e.target.value, 'per_100g')}
                            placeholder="e.g., 21.5g"
                            className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
                          />
                        </div>

                        {/* RI%* FOR 100 G */}
                        <div>
                          <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
                            RI%* FOR 100 G
                          </label>
                          <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            value={item.ri_percent_100g || ''}
                            onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_100g')}
                            placeholder="e.g., 31"
                            className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
                          />
                        </div>

                        {/* 1 PORTION (40 G) */}
                        <div>
                          <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
                            1 PORTION (40 G)
                          </label>
                          <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            value={item.portion || ''}
                            onChange={(e) => updateField('nutrition', index, e.target.value, 'portion')}
                            placeholder="e.g., 8.6g"
                            className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
                          />
                        </div>

                        {/* RI%* FOR 40 G */}
                        <div>
                          <label className="block text-xs font-medium text-[#8B5E3C] mb-2">
                            RI%* FOR 40 G
                          </label>
                          <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            value={item.ri_percent_portion || ''}
                            onChange={(e) => updateField('nutrition', index, e.target.value, 'ri_percent_portion')}
                            placeholder="e.g., 12"
                            className="w-full px-3 py-2 border border-[#8B5E3C]/30 rounded-xl bg-white/70 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200 text-sm"
                          />
                        </div>

                        {/* Remove Button */}
                        <div className="flex justify-end">
                          {formData.nutrition.length > 1 && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              type="button"
                              onClick={() => removeField('nutrition', index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                            >
                              <X size={16} />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ingredients Information */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-[#8B5E3C]">
                    Ingredients Information
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => addField('ingredients')}
                    className="text-[#8B5E3C] text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-[#8B5E3C]/10 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Add Ingredient</span>
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {formData.ingredients.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex space-x-3 items-start"
                    >
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="text"
                        value={item || ''}
                        onChange={(e) => updateField('ingredients', index, e.target.value)}
                        placeholder="Enter ingredient"
                        className="flex-1 px-4 py-3 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                      />
                      {formData.ingredients.length > 1 && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => removeField('ingredients', index)}
                          className="p-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
                        >
                          <X size={18} />
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-4 pt-6 border-t border-[#8B5E3C]/20"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSaveProduct}
                  disabled={loading || !formData.title.trim() || !formData.category_id}
                  className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={20} />
                  <span>{loading ? 'Saving...' : editingId ? 'Update Product' : 'Save Product'}</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCancel}
                  className="px-8 py-4 border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-2xl font-semibold flex items-center space-x-3 hover:bg-[#8B5E3C]/10 transition-colors"
                >
                  <X size={20} />
                  <span>Cancel</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid with Scrollbar */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categories={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isDeleting={deletingId === product.id}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {products.length === 0 && !isCreating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-[#8B5E3C]/20 mb-4">
            <ShoppingBag size={80} className="mx-auto" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">No Products Yet</h4>
          <p className="text-[#8B5E3C]/70 text-lg">Create your first product to get started</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProductManagement;
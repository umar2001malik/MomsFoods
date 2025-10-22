// // src/components/admin/CategoryManagement.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Edit2, Trash2, Save, X, Layers, FolderOpen } from 'lucide-react';
// import { useAPI } from '../Context/AuthContext';

// const CategoryManagement = () => {
//   const [categories, setCategories] = useState([]);
//   const [isCreating, setIsCreating] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: ''
//   });

//   // ✅ Import all API functions
//   const { CreateCategory, UpdateCategory, DeleteCategory, ListCategories } = useAPI();

//   // ✅ Fetch categories on mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await ListCategories();
//         setCategories(response.data || []);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // ✅ Format date from backend response
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Invalid date';
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (error) {
//       console.error('Error formatting date:', error);
//       return 'Invalid date';
//     }
//   };

//   const handleCreate = () => {
//     setIsCreating(true);
//     setFormData({ title: '', description: '' });
//   };

//   const handleSave = async () => {
//     if (!formData.title.trim()) return;

//     try {
//       if (editingId) {
//         // ✅ Update existing category
//         const response = await UpdateCategory(editingId, formData);
//         setCategories(categories.map(cat =>
//           cat.id === editingId
//             ? { ...cat, ...response.data }
//             : cat
//         ));
//       } else {
//         // ✅ Create new category
//         const response = await CreateCategory(formData);
//         setCategories([
//           ...categories,
//           {
//             id: response.data?.id || Date.now(),
//             title: response.data?.title || formData.title,
//             description: response.data?.description || formData.description,
//             productCount: 0,
//             created_at: response.data?.created_at || new Date().toISOString(),
//           },
//         ]);
//       }

//       setIsCreating(false);
//       setEditingId(null);
//       setFormData({ title: "", description: "" });
//     } catch (error) {
//       console.error("Error saving category:", error);
//     }
//   };

//   const handleEdit = (category) => {
//     setEditingId(category.id);
//     setFormData({
//       title: category.title,
//       description: category.description
//     });
//   };

//   // ✅ Delete from backend and update UI
//   const handleDelete = async (id) => {
//     try {
//       await DeleteCategory(id);
//       setCategories(categories.filter(cat => cat.id !== id));
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };

//   const handleCancel = () => {
//     setIsCreating(false);
//     setEditingId(null);
//     setFormData({ title: '', description: '' });
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
//           <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">Categories</h3>
//           <p className="text-[#8B5E3C]/70 text-lg mt-2">Manage your product categories</p>
          
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
//           <span>Add Category</span>
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
//               {editingId ? 'Edit Category' : 'Create New Category'}
//             </h4>
            
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
//                   Title *
//                 </label>
//                 <motion.input
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
//                   placeholder="Enter category title"
//                 />
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
//                   placeholder="Enter category description"
//                 />
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="flex space-x-4 pt-4 border-t border-[#8B5E3C]/20"
//               >
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSave}
//                   disabled={!formData.title.trim()}
//                   className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Save size={20} />
//                   <span>Save Category</span>
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

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence>
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ 
//                 scale: 1.02,
//                 y: -5,
//                 transition: { type: "spring", stiffness: 400 }
//               }}
//               className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-[#D1A15D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-3 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl shadow-lg">
//                       <Layers size={20} className="text-white" />
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{category.title}</h4>
//                       <div className="flex items-center space-x-2 mt-1">
//                         <FolderOpen size={14} className="text-[#8B5E3C]/60" />
//                         <span className="text-sm text-[#8B5E3C]/60">
//                           {category.productCount || 0} products
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex space-x-2">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => handleEdit(category)}
//                       className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors"
//                     >
//                       <Edit2 size={18} />
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => handleDelete(category.id)}
//                       className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
//                     >
//                       <Trash2 size={18} />
//                     </motion.button>
//                   </div>
//                 </div>
                
//                 {category.description && (
//                   <p className="text-[#8B5E3C]/80 text-sm leading-relaxed mb-4">{category.description}</p>
//                 )}
                
//                 {/* ✅ Removed ID display and fixed date formatting */}
//                 <div className="flex justify-end items-center text-xs text-[#8B5E3C]/60">
//                   <span>Created: {formatDate(category.created_at)}</span>
//                 </div>
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {categories.length === 0 && !isCreating && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-16"
//         >
//           <div className="text-[#8B5E3C]/20 mb-4">
//             <Layers size={80} className="mx-auto" />
//           </div>
//           <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">No Categories Yet</h4>
//           <p className="text-[#8B5E3C]/70 text-lg">Create your first category to get started</p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CategoryManagement;

// src/components/admin/CategoryManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X, Layers } from 'lucide-react';
import { useAPI } from '../Context/AuthContext';
import { useTranslation } from 'react-i18next';

const CategoryManagement = () => {
  // FIXED: Use default namespace "translation"
  const { t, i18n } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const { CreateCategory, UpdateCategory, DeleteCategory, ListCategories } = useAPI();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ListCategories();
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [ListCategories]);

  const formatDate = (dateString) => {
    if (!dateString) return t('admin.categoryManagement.invalidDate', { defaultValue: 'Invalid date' });
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(i18n.language || 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return t('admin.categoryManagement.invalidDate', { defaultValue: 'Invalid date' });
    }
  };

  const handleCreate = () => {
    setIsCreating(true);
    setFormData({ title: '', description: '' });
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;

    try {
      if (editingId) {
        const response = await UpdateCategory(editingId, formData);
        setCategories(categories.map(cat =>
          cat.id === editingId ? { ...cat, ...response.data } : cat
        ));
      } else {
        const response = await CreateCategory(formData);
        setCategories([
          ...categories,
          {
            id: response.data?.id || Date.now(),
            title: response.data?.title || formData.title,
            description: response.data?.description || formData.description,
            productCount: 0,
            created_at: response.data?.created_at || new Date().toISOString(),
          },
        ]);
      }

      setIsCreating(false);
      setEditingId(null);
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData({ title: category.title, description: category.description });
  };

  const handleDelete = async (id) => {
    try {
      await DeleteCategory(id);
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    setFormData({ title: '', description: '' });
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(139, 94, 60, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sticky top-0 bg-white z-10 pb-6 border-b border-[#8B5E3C]/10"
      >
        <div className="w-full sm:w-auto">
          <h3 className="text-3xl font-serif font-bold text-[#8B5E3C]">
            {t('admin.categoryManagement.title')}
          </h3>
          <p className="text-[#8B5E3C]/70 text-lg mt-2">
            {t('admin.categoryManagement.subtitle')}
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}

            className="h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mt-4"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreate}
          className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-2xl w-full sm:w-auto justify-center"
        >
          <Plus size={24} />
          <span>{t('admin.categoryManagement.addButton')}</span>
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
              {editingId 
                ? t('admin.categoryManagement.editTitle') 
                : t('admin.categoryManagement.createTitle')
              }
            </h4>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                  {t('admin.categoryManagement.titleLabel')}
                </label>
                <motion.input
                  variants={inputVariants}
                  whileFocus="focus"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                  placeholder={t('admin.categoryManagement.titlePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8B5E3C] mb-3">
                  {t('admin.categoryManagement.descriptionLabel')}
                </label>
                <motion.textarea
                  variants={inputVariants}
                  whileFocus="focus"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-4 border border-[#8B5E3C]/30 rounded-2xl bg-white/50 backdrop-blur-sm placeholder-[#8B5E3C]/50 text-[#8B5E3C] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-200"
                  placeholder={t('admin.categoryManagement.descriptionPlaceholder')}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-4 pt-4 border-t border-[#8B5E3C]/20"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 94, 60, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  disabled={!formData.title.trim()}
                  className="bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={20} />
                  <span>{t('admin.categoryManagement.saveButton')}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCancel}
                  className="px-8 py-4 border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-2xl font-semibold flex items-center space-x-3 hover:bg-[#8B5E3C]/10 transition-colors"
                >
                  <X size={20} />
                  <span>{t('admin.categoryManagement.cancelButton')}</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 400 } }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-[#D1A15D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-[#8B5E3C] to-[#D1A15D] rounded-2xl shadow-lg">
                      <Layers size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#8B5E3C]">{category.title}</h4>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(category)}
                      className="p-2 text-[#8B5E3C] hover:bg-[#8B5E3C]/10 rounded-xl transition-colors"
                      aria-label={t('admin.categoryManagement.editTitle')}
                    >
                      <Edit2 size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(category.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      aria-label={t('common.delete', { defaultValue: 'Delete' })}
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  </div>
                </div>

                {category.description && (
                  <p className="text-[#8B5E3C]/80 text-sm leading-relaxed mb-4">{category.description}</p>
                )}

                <div className="flex justify-end items-center text-xs text-[#8B5E3C]/60">
                  <span>{t('admin.categoryManagement.createdAt', { date: formatDate(category.created_at) })}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {categories.length === 0 && !isCreating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-[#8B5E3C]/20 mb-4">
            <Layers size={80} className="mx-auto" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-[#8B5E3C] mb-2">
            {t('admin.categoryManagement.noCategories')}
          </h4>
          <p className="text-[#8B5E3C]/70 text-lg">
            {t('admin.categoryManagement.noCategoriesHint')}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryManagement;
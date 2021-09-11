module.exports = {
  // mengaktifkan mode JIT  
  mode: 'jit',
  // pastikan tetap mengkonfigurasi purge, karena jit akan menggunakannya untuk prosesnya
  purge: ['build/**/*.html', 'build/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        karla: "'Karla', serif"
      },
      colors:{
        cyan: '#2ab2af',
        verycyan: '#75cccc',
        brightyellow: '#c0df34'
      }
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
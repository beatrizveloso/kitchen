/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type = input.type === 'password' ? 'text' : 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });
}
passwordAccess('password','loginPassword');

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type = input.type === 'password' ? 'text' : 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });
}
passwordRegister('passwordCreate','loginPasswordCreate');

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess');

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active');
});

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active');
});

/*=============== DUMMY LOGIN FUNCTION ===============*/
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
   alert('Login bem-sucedido!'); // Aceita qualquer email e senha
});

const createAccountButton = document.getElementById('createAccountButton');
createAccountButton.addEventListener('click', () => {
   alert('Conta criada com sucesso!'); // Aceita qualquer email e senha para criar conta
});

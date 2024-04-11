# RN-AtividadeModal

Orientações:
Crie um aplicativo simples que calcule qual combustivel esta compensando ( Alcool ou Gasolina ). Você deverá utilizar os seguintes componentes:
- 7 <Text></Text>
- 2 <TextInput></TextInput>
- 2 <Image />
- 2 <TouchableOpacity></TouchableOpacity>
- Hook ( useState )
- if ternário
- funções ( exampleFunc = () => {} )

Como fazer o calculo:

Dividimos o valor do litro do álcool pelo da gasolina.
Quando o resultado é menor que 0.7, a recomendação é abastecer 
com álcool. Se maior, a recomendação é escolher a gasolina.

Exemplo: se o álcool custa R$ 3.29 e a gasolina R$ 4.92, o resultado da divisão do primeiro pelo segundo é menor que 0.7. Portanto, é mais vantajoso abastecer com álcool

Tarefas:
Criar um projeto do zero;
O componentes devem estar centralizados;
O fundo da tela e do modal devem ser pretas;
Os botões (Touchable) devem possuir estilização;
	- Fonte 20px;
	- Texto centralizado;
	- Texto do primeiro botão: Calcular;
	- Texto do segundo botão: Calcular novamente;
	- Cor de fundo da sua escolha;
As imagens do projeto devem ser redondas;
Os TextInput devem possuir estilização;
	- Borda;
	- Cor da borda;
	- Padding;
	- Margin;
No modal deve aparecer:
	- Valor do alcool que foi inserido pelo usuário;
	- Valor da gasolina inserida pelo usuário;
	- E uma mensagem falando qual devemos utilizar (Alcool / Gasolina);
	- Os componentes devem estar centralizados;

#notas
prova1 = float(input("Nota1:"))
prova2 = float(input("Nota2:"))
prova3 = float(input("Nota3:"))
prova4 = float(input("Nota4:"))
 
#boletim
media = (prova1 + prova2 + prova3 + prova4) /4

#resultado
print(media)

if media < 60:
    print('Reprovado')
elif media < 70:
    print('Mediano')    
elif media < 80:
    print('Muito Bom')    
else:
    print('Excelente')    

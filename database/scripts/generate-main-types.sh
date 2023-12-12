#!/bin/bash

# Chemin vers le fichier de types générés par Supabase
inputFile="/home/jkergal/dev/drafty/database/types/database.types.ts"

# Chemin vers le fichier de sortie main.types.ts
outputFile="/home/jkergal/dev/drafty/database/types/main.types.ts"

# Extrait les noms des tables du fichier de types
tableNames=($(grep -oE '\b[a-z][a-zA-Z0-9_]*: \{' "$inputFile" | sed 's/: {//'))

# Génère dynamiquement le contenu du fichier main.types.ts
> "$outputFile"
echo "import { SupabackTypes } from './generic.types'" >> "$outputFile"
echo "" >> "$outputFile"
echo $tableNames

# Génère les types pour chaque table et les déclarations
for tableName in "${tableNames[@]}"; do
  echo "export type $tableName = SupabackTypes<'$tableName'>" >> "$outputFile"
done

echo "Le fichier $outputFile a été généré avec succès."
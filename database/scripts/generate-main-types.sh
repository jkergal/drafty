#!/bin/bash
inputFile="/home/jkergal/dev/drafty/database/docs/01-tables.generated.sql"

outputFile="/home/jkergal/dev/drafty/database/types/__generated__/main.types.ts"

tableNames=($(grep -oE 'CREATE TABLE public\.([a-z_]+)' "$inputFile" | sed -E 's/CREATE TABLE public\.([a-z_]+)/\1/'))

> "$outputFile"
echo "import { SupabackTypes } from '../generic.types'" >> "$outputFile"
echo "" >> "$outputFile"
echo $tableNames

for tableName in "${tableNames[@]}"; do
  pascalCaseTableName="$(sed -E 's/(^|_)([a-z])/\U\2/g' <<< $tableName)"

  echo "export type T$pascalCaseTableName = SupabackTypes<'$tableName'>" >> "$outputFile"
done

echo "Main database types has been successfully generated"
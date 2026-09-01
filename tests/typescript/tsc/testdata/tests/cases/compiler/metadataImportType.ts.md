__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 22,
                    "end": 26
                  },
                  "start": 21,
                  "end": 26
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./b",
                    "raw": "'./b'",
                    "start": 41,
                    "end": 46
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 49
                  },
                  "typeArguments": null,
                  "start": 34,
                  "end": 49
                },
                "start": 32,
                "end": 49
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 49
            }
          ],
          "start": 15,
          "end": 51
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "'./b'",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  }
]
```

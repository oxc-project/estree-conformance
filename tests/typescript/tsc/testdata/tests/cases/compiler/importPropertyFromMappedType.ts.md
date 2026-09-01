__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 35
      },
      "start": 11,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "createHttpError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createHttpError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 83
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NamedConstructors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 101
                  },
                  "start": 68,
                  "end": 101
                },
                "typeArguments": null,
                "start": 68,
                "end": 101
              },
              "start": 66,
              "end": 101
            },
            "start": 51,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 101
        }
      ],
      "declare": true,
      "start": 37,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createHttpError",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 136
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamedConstructors",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 165
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "constraint": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "NotFound",
                  "raw": "'NotFound'",
                  "start": 177,
                  "end": 187
                },
                "start": 177,
                "end": 187
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 190,
                "end": 197
              },
              "optional": false,
              "readonly": null,
              "start": 169,
              "end": 199
            },
            "declare": false,
            "start": 143,
            "end": 199
          }
        ],
        "start": 137,
        "end": 201
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 103,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 202
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "createHttpError",
    "start": 20,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "createHttpError",
    "start": 51,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "createHttpError",
    "start": 68,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "NamedConstructors",
    "start": 84,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "createHttpError",
    "start": 121,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "NamedConstructors",
    "start": 148,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 174,
    "end": 176
  },
  {
    "type": "String",
    "value": "'NotFound'",
    "start": 177,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./errors",
        "raw": "'./errors'",
        "start": 25,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "NotFound",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "'./errors'",
    "start": 25,
    "end": 35
  }
]
```

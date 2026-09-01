__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 86
          }
        ],
        "start": 79,
        "end": 87
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 88,
        "end": 90
      },
      "abstract": false,
      "declare": true,
      "start": 57,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 131
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "typeArguments": null,
            "start": 132,
            "end": 143
          }
        ],
        "start": 131,
        "end": 144
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 145,
        "end": 147
      },
      "abstract": false,
      "declare": true,
      "start": 92,
      "end": 147
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClientDocumentMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 185
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 198
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 219
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 221,
                        "end": 224
                      },
                      "start": 221,
                      "end": 226
                    },
                    "start": 219,
                    "end": 226
                  },
                  "value": null,
                  "start": 212,
                  "end": 226
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 231,
                  "end": 234
                },
                "start": 228,
                "end": 234
              },
              "start": 207,
              "end": 234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 234
          }
        ],
        "start": 185,
        "end": 237
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 253
              },
              "typeArguments": null,
              "start": 244,
              "end": 253
            },
            "start": 242,
            "end": 253
          },
          "start": 238,
          "end": 253
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 256,
          "end": 259
        },
        "start": 254,
        "end": 259
      },
      "body": null,
      "expression": false,
      "start": 149,
      "end": 260
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 280
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClientDocumentMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 308
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseItem",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 317
          }
        ],
        "optional": false,
        "start": 289,
        "end": 318
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 319,
        "end": 321
      },
      "abstract": false,
      "declare": true,
      "start": 262,
      "end": 321
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 323,
      "end": 333
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 333
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Parent",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 92,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "BaseItem",
    "start": 106,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 157,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "ClientDocumentMixin",
    "start": 166,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 189,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 199,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 228,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 262,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 276,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "ClientDocumentMixin",
    "start": 289,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "BaseItem",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 323,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  }
]
```

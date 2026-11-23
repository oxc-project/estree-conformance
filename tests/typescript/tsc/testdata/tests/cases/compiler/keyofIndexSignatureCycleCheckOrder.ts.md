__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 236
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  "start": 241,
                  "end": 249
                },
                "start": 240,
                "end": 249
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "typeArguments": null,
                "start": 252,
                "end": 253
              },
              "start": 250,
              "end": 253
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 239,
            "end": 254
          }
        ],
        "start": 237,
        "end": 256
      },
      "declare": false,
      "start": 225,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 263
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "typeArguments": null,
          "start": 272,
          "end": 273
        },
        "start": 266,
        "end": 273
      },
      "declare": false,
      "start": 257,
      "end": 274
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "typeArguments": null,
                "start": 284,
                "end": 285
              },
              "start": 282,
              "end": 285
            },
            "start": 281,
            "end": 285
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 288,
            "end": 291
          },
          "definite": false,
          "start": 281,
          "end": 291
        }
      ],
      "declare": false,
      "start": 275,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 225,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  }
]
```

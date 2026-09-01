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
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 197
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 199
                  }
                ],
                "start": 197,
                "end": 200
              },
              "start": 195,
              "end": 200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 200
          }
        ],
        "start": 184,
        "end": 201
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 276
                },
                "typeArguments": null,
                "start": 275,
                "end": 276
              },
              "start": 273,
              "end": 276
            },
            "accessibility": null,
            "static": false,
            "start": 272,
            "end": 276
          }
        ],
        "start": 266,
        "end": 278
      },
      "declare": false,
      "start": 172,
      "end": 278
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 292
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 307,
                        "end": 309
                      },
                      "typeArguments": null,
                      "start": 307,
                      "end": 309
                    }
                  ],
                  "start": 306,
                  "end": 310
                },
                "start": 304,
                "end": 310
              }
            ],
            "start": 303,
            "end": 311
          },
          "start": 301,
          "end": 311
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 312,
        "end": 315
      },
      "declare": false,
      "start": 280,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 172,
  "end": 315
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 172,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 280,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 290,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 293,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  }
]
```

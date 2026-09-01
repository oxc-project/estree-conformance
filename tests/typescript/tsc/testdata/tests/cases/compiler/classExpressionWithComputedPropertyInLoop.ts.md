__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 262,
                  "end": 265
                },
                "start": 262,
                "end": 267
              },
              "start": 260,
              "end": 267
            },
            "start": 255,
            "end": 267
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 270,
            "end": 272
          },
          "definite": false,
          "start": 255,
          "end": 272
        }
      ],
      "declare": false,
      "start": 249,
      "end": 273
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
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "init": {
            "type": "Literal",
            "value": "myKey",
            "raw": "\"myKey\"",
            "start": 286,
            "end": 293
          },
          "definite": false,
          "start": 280,
          "end": 293
        }
      ],
      "declare": false,
      "start": 274,
      "end": 294
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 308,
              "end": 309
            },
            "definite": false,
            "start": 304,
            "end": 309
          }
        ],
        "declare": false,
        "start": 300,
        "end": 309
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 312
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 315,
          "end": 316
        },
        "start": 311,
        "end": 316
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 319
        },
        "start": 318,
        "end": 321
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 334
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 339
                },
                "optional": false,
                "computed": false,
                "start": 329,
                "end": 339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 347
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
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 362
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 367
                        },
                        "computed": true,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 358,
                        "end": 368
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 377,
                          "end": 383
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 387
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 377,
                        "end": 388
                      }
                    ],
                    "start": 348,
                    "end": 394
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 340,
                  "end": 394
                }
              ],
              "optional": false,
              "start": 329,
              "end": 395
            },
            "directive": null,
            "start": 329,
            "end": 396
          }
        ],
        "start": 323,
        "end": 398
      },
      "start": 295,
      "end": 398
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 249,
  "end": 398
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "String",
    "value": "\"myKey\"",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  }
]
```

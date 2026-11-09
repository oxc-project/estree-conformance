__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 261
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 281,
              "end": 284
            },
            "abstract": false,
            "declare": false,
            "start": 268,
            "end": 284
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 312
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 312
                    },
                    "start": 304,
                    "end": 312
                  },
                  "start": 301,
                  "end": 312
                },
                "init": null,
                "definite": false,
                "start": 301,
                "end": 312
              }
            ],
            "declare": true,
            "start": 289,
            "end": 313
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 321,
                "end": 322
              },
              "operator": "instanceof",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 334,
                "end": 338
              },
              "start": 321,
              "end": 338
            },
            "directive": null,
            "start": 321,
            "end": 339
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 381
              },
              "operator": "instanceof",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 393,
                "end": 394
              },
              "start": 378,
              "end": 394
            },
            "directive": null,
            "start": 378,
            "end": 395
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 406
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 421
              },
              "start": 400,
              "end": 421
            },
            "directive": null,
            "start": 400,
            "end": 422
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 459,
                "end": 463
              },
              "operator": "instanceof",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 475,
                "end": 479
              },
              "start": 459,
              "end": 479
            },
            "directive": null,
            "start": 459,
            "end": 480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 488
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 506
              },
              "start": 485,
              "end": 506
            },
            "directive": null,
            "start": 485,
            "end": 507
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 521
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 542
              },
              "start": 512,
              "end": 542
            },
            "directive": null,
            "start": 512,
            "end": 543
          }
        ],
        "start": 262,
        "end": 545
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 247,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 247,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 289,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 323,
    "end": 333
  },
  {
    "type": "Null",
    "value": "null",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 378,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 382,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 400,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 407,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Null",
    "value": "null",
    "start": 459,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 464,
    "end": 474
  },
  {
    "type": "Null",
    "value": "null",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 485,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 489,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 512,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 522,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 533,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  }
]
```

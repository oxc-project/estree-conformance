__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 298
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 309,
              "end": 311
            },
            "computed": false,
            "start": 305,
            "end": 311
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "computed": false,
            "start": 317,
            "end": 322
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 335,
                "end": 336
              },
              "start": 333,
              "end": 336
            },
            "computed": false,
            "start": 328,
            "end": 337
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "initializer": null,
            "computed": false,
            "start": 343,
            "end": 344
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "prefix": true,
              "start": 354,
              "end": 356
            },
            "computed": false,
            "start": 350,
            "end": 356
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 371,
                  "end": 372
                },
                "start": 366,
                "end": 372
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 376,
                "end": 377
              },
              "start": 366,
              "end": 377
            },
            "computed": false,
            "start": 362,
            "end": 377
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 392,
                  "end": 393
                },
                "start": 387,
                "end": 393
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 398,
                "end": 399
              },
              "start": 387,
              "end": 399
            },
            "computed": false,
            "start": 383,
            "end": 399
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "start": 409,
              "end": 414
            },
            "computed": false,
            "start": 405,
            "end": 414
          }
        ],
        "start": 299,
        "end": 416
      },
      "const": true,
      "declare": false,
      "start": 286,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 286,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 286,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 334,
    "end": 335
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "a",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 368,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 373,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 389,
    "end": 391
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 394,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  }
]
```

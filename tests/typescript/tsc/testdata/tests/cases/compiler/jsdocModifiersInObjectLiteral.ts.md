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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 206
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "created",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 239
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 242,
                    "end": 247
                  },
                  "expression": false,
                  "start": 239,
                  "end": 247
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 232,
                "end": 247
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onClose_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 278
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 281,
                    "end": 286
                  },
                  "expression": false,
                  "start": 278,
                  "end": 286
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 286
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 319
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 335,
                          "end": 336
                        },
                        "start": 328,
                        "end": 337
                      }
                    ],
                    "start": 322,
                    "end": 341
                  },
                  "expression": false,
                  "start": 319,
                  "end": 341
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 310,
                "end": 341
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 375
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 377
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 379,
                    "end": 384
                  },
                  "expression": false,
                  "start": 375,
                  "end": 384
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 366,
                "end": 384
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "load",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 416
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 419,
                    "end": 424
                  },
                  "expression": false,
                  "start": 416,
                  "end": 424
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 406,
                "end": 424
              }
            ],
            "start": 209,
            "end": 427
          },
          "definite": false,
          "start": 203,
          "end": 427
        }
      ],
      "declare": false,
      "start": 197,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 197,
  "end": 428
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "created",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "onClose_",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
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
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 328,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  }
]
```

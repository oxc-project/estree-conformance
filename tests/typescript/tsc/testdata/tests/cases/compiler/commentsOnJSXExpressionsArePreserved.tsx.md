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
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 162,
        "end": 164
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 148,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 180
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 193
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 214,
                          "end": 217
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 213,
                        "end": 218
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 218,
                          "end": 231
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "JSXEmptyExpression",
                            "start": 232,
                            "end": 245
                          },
                          "start": 231,
                          "end": 246
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 246,
                          "end": 259
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 260,
                            "end": 264
                          },
                          "start": 259,
                          "end": 280
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 280,
                          "end": 293
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "JSXEmptyExpression",
                            "start": 294,
                            "end": 332
                          },
                          "start": 293,
                          "end": 333
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 333,
                          "end": 346
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "JSXEmptyExpression",
                            "start": 347,
                            "end": 369
                          },
                          "start": 346,
                          "end": 370
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 370,
                          "end": 383
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "JSXEmptyExpression",
                            "start": 384,
                            "end": 405
                          },
                          "start": 383,
                          "end": 406
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 406,
                          "end": 419
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "JSXEmptyExpression",
                            "start": 420,
                            "end": 469
                          },
                          "start": 419,
                          "end": 470
                        },
                        {
                          "type": "JSXText",
                          "value": "\n        ",
                          "raw": "\n        ",
                          "start": 470,
                          "end": 479
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 481,
                          "end": 484
                        },
                        "start": 479,
                        "end": 485
                      },
                      "start": 213,
                      "end": 485
                    },
                    "start": 206,
                    "end": 486
                  }
                ],
                "start": 196,
                "end": 492
              },
              "expression": false,
              "start": 193,
              "end": 492
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 492
          }
        ],
        "start": 181,
        "end": 494
      },
      "abstract": false,
      "declare": false,
      "start": 165,
      "end": 494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 148,
  "end": 494
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 218,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 246,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Null",
    "value": "null",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 280,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 333,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 370,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 406,
    "end": 419
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
    "start": 469,
    "end": 470
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 470,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 480,
    "end": 481
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  }
]
```

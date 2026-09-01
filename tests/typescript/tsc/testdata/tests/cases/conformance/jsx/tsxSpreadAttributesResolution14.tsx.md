__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 101
      },
      "typeParameters": null,
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 149
          }
        ],
        "start": 102,
        "end": 151
      },
      "declare": false,
      "start": 77,
      "end": 151
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 186
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 208
                },
                "typeArguments": null,
                "start": 194,
                "end": 208
              },
              "start": 192,
              "end": 208
            },
            "start": 187,
            "end": 208
          }
        ],
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
                    "name": "AnotherComponent",
                    "start": 266,
                    "end": 282
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXSpreadAttribute",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 292
                      },
                      "start": 283,
                      "end": 293
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Property1",
                        "start": 294,
                        "end": 303
                      },
                      "value": null,
                      "start": 294,
                      "end": 303
                    }
                  ],
                  "selfClosing": true,
                  "start": 265,
                  "end": 305
                },
                "children": [],
                "closingElement": null,
                "start": 265,
                "end": 305
              },
              "start": 216,
              "end": 312
            }
          ],
          "start": 210,
          "end": 314
        },
        "expression": false,
        "start": 168,
        "end": 314
      },
      "exportKind": "value",
      "start": 153,
      "end": 314
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 347
      },
      "typeParameters": null,
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 365,
                "end": 371
              },
              "start": 363,
              "end": 371
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 372
          }
        ],
        "start": 348,
        "end": 374
      },
      "declare": false,
      "start": 316,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 413
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 413
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 404,
              "end": 413
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 438
              },
              "typeArguments": null,
              "start": 417,
              "end": 438
            },
            "start": 415,
            "end": 438
          },
          "start": 402,
          "end": 438
        }
      ],
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
                  "name": "span",
                  "start": 464,
                  "end": 468
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 463,
                "end": 469
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "property1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 479
                  },
                  "start": 469,
                  "end": 480
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 482,
                  "end": 486
                },
                "start": 480,
                "end": 487
              },
              "start": 463,
              "end": 487
            },
            "start": 446,
            "end": 494
          }
        ],
        "start": 440,
        "end": 496
      },
      "expression": false,
      "start": 376,
      "end": 496
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 496
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 87,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 108,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "property2",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 160,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 177,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 194,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherComponent",
    "start": 266,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "JSXIdentifier",
    "value": "Property1",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 316,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 326,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 354,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "AnotherComponent",
    "start": 385,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 417,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 470,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 481,
    "end": 482
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  }
]
```

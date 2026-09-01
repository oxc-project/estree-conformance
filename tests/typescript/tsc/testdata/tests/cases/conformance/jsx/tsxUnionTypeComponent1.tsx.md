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
              "name": "AnyComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 127
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 146
                      },
                      "start": 122,
                      "end": 146
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 147,
                          "end": 150
                        }
                      ],
                      "start": 146,
                      "end": 151
                    },
                    "start": 122,
                    "end": 151
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 159
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 174
                      },
                      "start": 154,
                      "end": 174
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 175,
                          "end": 178
                        }
                      ],
                      "start": 174,
                      "end": 179
                    },
                    "start": 154,
                    "end": 179
                  }
                ],
                "start": 122,
                "end": 179
              },
              "start": 120,
              "end": 179
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 180
          }
        ],
        "start": 102,
        "end": 182
      },
      "declare": false,
      "start": 77,
      "end": 182
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 201
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 215
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 225
        },
        "optional": false,
        "computed": false,
        "start": 210,
        "end": 225
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 240
            },
            "typeArguments": null,
            "start": 226,
            "end": 240
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 242,
            "end": 244
          }
        ],
        "start": 225,
        "end": 245
      },
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
              "start": 252,
              "end": 258
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 291
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 291
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 279,
                              "end": 291
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 293
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 296,
                            "end": 300
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 306
                          },
                          "optional": false,
                          "computed": false,
                          "start": 296,
                          "end": 306
                        },
                        "definite": false,
                        "start": 277,
                        "end": 306
                      }
                    ],
                    "declare": false,
                    "start": 271,
                    "end": 307
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "AnyComponent",
                          "start": 325,
                          "end": 337
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 324,
                        "end": 340
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 324,
                      "end": 340
                    },
                    "start": 316,
                    "end": 342
                  }
                ],
                "start": 261,
                "end": 348
              },
              "expression": false,
              "start": 258,
              "end": 348
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 252,
            "end": 348
          }
        ],
        "start": 246,
        "end": 350
      },
      "abstract": false,
      "declare": false,
      "start": 184,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 385,
            "end": 396
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "start": 397,
                "end": 409
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 418,
                        "end": 424
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 417,
                      "end": 425
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "test",
                        "raw": "test",
                        "start": 425,
                        "end": 429
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 438
                    },
                    "start": 417,
                    "end": 438
                  },
                  "id": null,
                  "generator": false,
                  "start": 411,
                  "end": 438
                },
                "start": 410,
                "end": 439
              },
              "start": 397,
              "end": 439
            }
          ],
          "selfClosing": true,
          "start": 384,
          "end": 441
        },
        "children": [],
        "closingElement": null,
        "start": 384,
        "end": 441
      },
      "directive": null,
      "start": 384,
      "end": 441
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyButtonComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 494
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 503,
          "end": 508
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 509,
          "end": 518
        },
        "optional": false,
        "computed": false,
        "start": 503,
        "end": 518
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 519,
            "end": 521
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 522,
            "end": 524
          }
        ],
        "start": 518,
        "end": 525
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 526,
        "end": 529
      },
      "abstract": false,
      "declare": false,
      "start": 471,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 532,
            "end": 543
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "start": 544,
                "end": 556
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyButtonComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 575
                },
                "start": 557,
                "end": 576
              },
              "start": 544,
              "end": 576
            }
          ],
          "selfClosing": true,
          "start": 531,
          "end": 579
        },
        "children": [],
        "closingElement": null,
        "start": 531,
        "end": 579
      },
      "directive": null,
      "start": 531,
      "end": 579
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 580
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
    "value": "AnyComponent",
    "start": 108,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "StatelessComponent",
    "start": 128,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 160,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 190,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 202,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 226,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "AnyComponent",
    "start": 279,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "JSXIdentifier",
    "value": "AnyComponent",
    "start": 325,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 384,
    "end": 385
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 385,
    "end": 396
  },
  {
    "type": "JSXIdentifier",
    "value": "AnyComponent",
    "start": 397,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "JSXText",
    "value": "test",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 430,
    "end": 431
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 471,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "MyButtonComponent",
    "start": 477,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 495,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 509,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 532,
    "end": 543
  },
  {
    "type": "JSXIdentifier",
    "value": "AnyComponent",
    "start": 544,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "MyButtonComponent",
    "start": 558,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  }
]
```

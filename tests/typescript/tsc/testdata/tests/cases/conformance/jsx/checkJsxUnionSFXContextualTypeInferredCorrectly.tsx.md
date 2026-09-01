__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PS",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 85
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
              "name": "multi",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 99,
                  "end": 104
                },
                "start": 99,
                "end": 104
              },
              "start": 97,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 125,
                    "end": 134
                  }
                ],
                "start": 116,
                "end": 134
              },
              "start": 114,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 134
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 161,
                            "end": 167
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 170,
                            "end": 179
                          }
                        ],
                        "start": 161,
                        "end": 179
                      },
                      "start": 159,
                      "end": 179
                    },
                    "start": 150,
                    "end": 179
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  },
                  "start": 181,
                  "end": 188
                },
                "start": 149,
                "end": 188
              },
              "start": 147,
              "end": 188
            },
            "accessibility": null,
            "static": false,
            "start": 139,
            "end": 188
          }
        ],
        "start": 86,
        "end": 190
      },
      "declare": false,
      "start": 73,
      "end": 190
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PM",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 204
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
              "name": "multi",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 218,
                  "end": 222
                },
                "start": 218,
                "end": 222
              },
              "start": 216,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 234,
                  "end": 240
                },
                "start": 234,
                "end": 242
              },
              "start": 232,
              "end": 242
            },
            "accessibility": null,
            "static": false,
            "start": 227,
            "end": 242
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 255
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 269,
                          "end": 275
                        },
                        "start": 269,
                        "end": 277
                      },
                      "start": 267,
                      "end": 277
                    },
                    "start": 258,
                    "end": 277
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 282,
                    "end": 286
                  },
                  "start": 279,
                  "end": 286
                },
                "start": 257,
                "end": 286
              },
              "start": 255,
              "end": 286
            },
            "accessibility": null,
            "static": false,
            "start": 247,
            "end": 286
          }
        ],
        "start": 205,
        "end": 288
      },
      "declare": false,
      "start": 192,
      "end": 288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 324
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 334
                    },
                    "typeArguments": null,
                    "start": 332,
                    "end": 334
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 339
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 339
                  }
                ],
                "start": 332,
                "end": 339
              },
              "start": 330,
              "end": 339
            },
            "start": 325,
            "end": 339
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
                    "name": "h1",
                    "start": 355,
                    "end": 357
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 354,
                  "end": 358
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 360,
                    "end": 362
                  },
                  "start": 358,
                  "end": 363
                },
                "start": 354,
                "end": 363
              },
              "start": 347,
              "end": 364
            }
          ],
          "start": 341,
          "end": 366
        },
        "expression": false,
        "start": 297,
        "end": 366
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 290,
      "end": 366
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HereIsTheError",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 422
        },
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
                    "name": "ComponentWithUnion",
                    "start": 449,
                    "end": 467
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "multi",
                        "start": 480,
                        "end": 485
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 487,
                          "end": 492
                        },
                        "start": 486,
                        "end": 493
                      },
                      "start": 480,
                      "end": 493
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "value",
                        "start": 506,
                        "end": 511
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": "s",
                          "raw": "'s'",
                          "start": 513,
                          "end": 516
                        },
                        "start": 512,
                        "end": 517
                      },
                      "start": 506,
                      "end": 517
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "onChange",
                        "start": 530,
                        "end": 538
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 540,
                              "end": 543
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 554
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 558
                              },
                              "optional": false,
                              "computed": false,
                              "start": 547,
                              "end": 558
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 559,
                                "end": 562
                              }
                            ],
                            "optional": false,
                            "start": 547,
                            "end": 563
                          },
                          "id": null,
                          "generator": false,
                          "start": 540,
                          "end": 563
                        },
                        "start": 539,
                        "end": 564
                      },
                      "start": 530,
                      "end": 564
                    }
                  ],
                  "selfClosing": true,
                  "start": 448,
                  "end": 602
                },
                "children": [],
                "closingElement": null,
                "start": 448,
                "end": 602
              },
              "start": 431,
              "end": 609
            }
          ],
          "start": 425,
          "end": 611
        },
        "expression": false,
        "start": 399,
        "end": 611
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 392,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentWithUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multi",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 673
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 675,
                  "end": 680
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 668,
                "end": 680
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 691
                },
                "value": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "'s'",
                  "start": 693,
                  "end": 696
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 686,
                "end": 696
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onChange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 710
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 715
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 726
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 727,
                        "end": 730
                      },
                      "optional": false,
                      "computed": false,
                      "start": 719,
                      "end": 730
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 731,
                        "end": 734
                      }
                    ],
                    "optional": false,
                    "start": 719,
                    "end": 735
                  },
                  "id": null,
                  "generator": false,
                  "start": 712,
                  "end": 735
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 702,
                "end": 735
              }
            ],
            "start": 662,
            "end": 759
          }
        ],
        "optional": false,
        "start": 643,
        "end": 760
      },
      "directive": null,
      "start": 643,
      "end": 761
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 761
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 73,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "PS",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "multi",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 181,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 192,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "PM",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "multi",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 218,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 279,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 290,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 297,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "ComponentWithUnion",
    "start": 306,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "PM",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "PS",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 359,
    "end": 360
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 392,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 399,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "HereIsTheError",
    "start": 408,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithUnion",
    "start": 449,
    "end": 467
  },
  {
    "type": "JSXIdentifier",
    "value": "multi",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "String",
    "value": "'s'",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "JSXIdentifier",
    "value": "onChange",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 544,
    "end": 546
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 547,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "ComponentWithUnion",
    "start": 643,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "multi",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "String",
    "value": "'s'",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 702,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 712,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 716,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  }
]
```

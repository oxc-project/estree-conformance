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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 62,
                  "end": 66
                },
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 68,
            "end": 81
          }
        ],
        "start": 54,
        "end": 83
      },
      "declare": false,
      "start": 42,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 95
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
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 104,
                  "end": 109
                },
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 110
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
              "start": 111,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 125
          }
        ],
        "start": 96,
        "end": 127
      },
      "declare": false,
      "start": 84,
      "end": 127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeArguments": null,
            "start": 137,
            "end": 138
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "typeArguments": null,
            "start": 141,
            "end": 142
          }
        ],
        "start": 137,
        "end": 142
      },
      "declare": false,
      "start": 128,
      "end": 143
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
            "name": "isIt",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 154
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 168
                },
                "optional": false,
                "computed": false,
                "start": 157,
                "end": 168
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 157,
              "end": 170
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "value": 0.5,
              "raw": "0.5",
              "start": 173,
              "end": 176
            },
            "start": 157,
            "end": 176
          },
          "definite": false,
          "start": 150,
          "end": 176
        }
      ],
      "declare": false,
      "start": 144,
      "end": 177
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "typeArguments": null,
                "start": 187,
                "end": 188
              },
              "start": 185,
              "end": 188
            },
            "start": 184,
            "end": 188
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 195
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 204
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 204
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 200,
                  "end": 204
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 210
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hey",
                    "raw": "'hey'",
                    "start": 212,
                    "end": 217
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 206,
                  "end": 217
                }
              ],
              "start": 198,
              "end": 219
            },
            "alternate": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 228
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 228
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 224,
                  "end": 228
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
                    "start": 230,
                    "end": 235
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 237,
                    "end": 240
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 230,
                  "end": 240
                }
              ],
              "start": 222,
              "end": 242
            },
            "start": 191,
            "end": 242
          },
          "definite": false,
          "start": 184,
          "end": 242
        }
      ],
      "declare": false,
      "start": 178,
      "end": 243
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
            "name": "cc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "typeArguments": null,
                "start": 254,
                "end": 255
              },
              "start": 252,
              "end": 255
            },
            "start": 250,
            "end": 255
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 262
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 271
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 277
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 267,
                  "end": 277
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 283
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hey",
                    "raw": "'hey'",
                    "start": 285,
                    "end": 290
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 279,
                  "end": 290
                }
              ],
              "start": 265,
              "end": 292
            },
            "alternate": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 301
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isIt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 307
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 297,
                  "end": 307
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
                    "start": 309,
                    "end": 314
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 316,
                    "end": 319
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 309,
                  "end": 319
                }
              ],
              "start": 295,
              "end": 321
            },
            "start": 258,
            "end": 321
          },
          "definite": false,
          "start": 250,
          "end": 321
        }
      ],
      "declare": false,
      "start": 244,
      "end": 322
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 374
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 376,
                      "end": 380
                    },
                    "start": 376,
                    "end": 380
                  },
                  "start": 374,
                  "end": 380
                },
                "accessibility": null,
                "static": false,
                "start": 362,
                "end": 381
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 401
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 409,
                        "end": 413
                      },
                      "start": 406,
                      "end": 413
                    },
                    "start": 403,
                    "end": 413
                  },
                  "start": 401,
                  "end": 413
                },
                "accessibility": null,
                "static": false,
                "start": 390,
                "end": 414
              }
            ],
            "start": 352,
            "end": 420
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 449
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 451,
                      "end": 456
                    },
                    "start": 451,
                    "end": 456
                  },
                  "start": 449,
                  "end": 456
                },
                "accessibility": null,
                "static": false,
                "start": 437,
                "end": 457
              }
            ],
            "start": 427,
            "end": 463
          }
        ],
        "start": 350,
        "end": 463
      },
      "declare": false,
      "start": 324,
      "end": 464
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Funk",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 474
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_props",
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
                      "start": 486,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 486,
                    "end": 500
                  },
                  "start": 484,
                  "end": 500
                },
                "start": 478,
                "end": 500
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 506,
                  "end": 509
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 505,
                "end": 510
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 510,
                  "end": 515
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 517,
                  "end": 520
                },
                "start": 515,
                "end": 521
              },
              "start": 505,
              "end": 521
            },
            "id": null,
            "generator": false,
            "start": 477,
            "end": 521
          },
          "definite": false,
          "start": 470,
          "end": 521
        }
      ],
      "declare": false,
      "start": 466,
      "end": 522
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail1",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 533
          },
          "init": {
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
                  "name": "Funk",
                  "start": 543,
                  "end": 547
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 548,
                      "end": 559
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 567,
                          "end": 570
                        },
                        "id": null,
                        "generator": false,
                        "start": 561,
                        "end": 570
                      },
                      "start": 560,
                      "end": 571
                    },
                    "start": 548,
                    "end": 571
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 572,
                      "end": 584
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 586,
                        "end": 590
                      },
                      "start": 585,
                      "end": 591
                    },
                    "start": 572,
                    "end": 591
                  }
                ],
                "selfClosing": true,
                "start": 542,
                "end": 594
              },
              "children": [],
              "closingElement": null,
              "start": 542,
              "end": 594
            },
            "id": null,
            "generator": false,
            "start": 536,
            "end": 594
          },
          "definite": false,
          "start": 528,
          "end": 594
        }
      ],
      "declare": false,
      "start": 524,
      "end": 594
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail2",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 604
          },
          "init": {
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
                  "name": "Funk",
                  "start": 614,
                  "end": 618
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 619,
                      "end": 630
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 638,
                          "end": 641
                        },
                        "id": null,
                        "generator": false,
                        "start": 632,
                        "end": 641
                      },
                      "start": 631,
                      "end": 642
                    },
                    "start": 619,
                    "end": 642
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 643,
                      "end": 655
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 657,
                          "end": 661
                        },
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 665,
                            "end": 669
                          },
                          "start": 665,
                          "end": 669
                        },
                        "start": 657,
                        "end": 669
                      },
                      "start": 656,
                      "end": 670
                    },
                    "start": 643,
                    "end": 670
                  }
                ],
                "selfClosing": true,
                "start": 613,
                "end": 673
              },
              "children": [],
              "closingElement": null,
              "start": 613,
              "end": 673
            },
            "id": null,
            "generator": false,
            "start": 607,
            "end": 673
          },
          "definite": false,
          "start": 599,
          "end": 673
        }
      ],
      "declare": false,
      "start": 595,
      "end": 673
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "True",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 682
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 685,
              "end": 689
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 693,
                "end": 697
              },
              "start": 693,
              "end": 697
            },
            "start": 685,
            "end": 697
          },
          "definite": false,
          "start": 678,
          "end": 697
        }
      ],
      "declare": false,
      "start": 674,
      "end": 698
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fail3",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 708
          },
          "init": {
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
                  "name": "Funk",
                  "start": 718,
                  "end": 722
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "mandatoryFn",
                      "start": 723,
                      "end": 734
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 742,
                          "end": 745
                        },
                        "id": null,
                        "generator": false,
                        "start": 736,
                        "end": 745
                      },
                      "start": 735,
                      "end": 746
                    },
                    "start": 723,
                    "end": 746
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "optionalBool",
                      "start": 747,
                      "end": 759
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "True",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 765
                      },
                      "start": 760,
                      "end": 766
                    },
                    "start": 747,
                    "end": 766
                  }
                ],
                "selfClosing": true,
                "start": 717,
                "end": 769
              },
              "children": [],
              "closingElement": null,
              "start": 717,
              "end": 769
            },
            "id": null,
            "generator": false,
            "start": 711,
            "end": 769
          },
          "definite": false,
          "start": 703,
          "end": 769
        }
      ],
      "declare": false,
      "start": 699,
      "end": 769
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attrs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 780
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
                  "name": "optionalBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 797
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 799,
                    "end": 803
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 807,
                      "end": 811
                    },
                    "start": 807,
                    "end": 811
                  },
                  "start": 799,
                  "end": 811
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 785,
                "end": 811
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mandatoryFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 824
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 832,
                    "end": 835
                  },
                  "id": null,
                  "generator": false,
                  "start": 826,
                  "end": 835
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 813,
                "end": 835
              }
            ],
            "start": 783,
            "end": 837
          },
          "definite": false,
          "start": 774,
          "end": 837
        }
      ],
      "declare": false,
      "start": 770,
      "end": 837
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Success",
            "optional": false,
            "typeAnnotation": null,
            "start": 842,
            "end": 849
          },
          "init": {
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
                  "name": "Funk",
                  "start": 859,
                  "end": 863
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attrs2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 874
                    },
                    "start": 864,
                    "end": 875
                  }
                ],
                "selfClosing": true,
                "start": 858,
                "end": 878
              },
              "children": [],
              "closingElement": null,
              "start": 858,
              "end": 878
            },
            "id": null,
            "generator": false,
            "start": 852,
            "end": 878
          },
          "definite": false,
          "start": 842,
          "end": 878
        }
      ],
      "declare": false,
      "start": 838,
      "end": 878
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 878
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 144,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "'hey'",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "'hey'",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "isIt",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 324,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 329,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 362,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "mandatoryFn",
    "start": 390,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 406,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 437,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Funk",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "_props",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 486,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 516,
    "end": 517
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Fail1",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 543,
    "end": 547
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 548,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
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
    "value": "=>",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 572,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Fail2",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 614,
    "end": 618
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 619,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 643,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 657,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 662,
    "end": 664
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "True",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 685,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 690,
    "end": 692
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "Fail3",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 718,
    "end": 722
  },
  {
    "type": "JSXIdentifier",
    "value": "mandatoryFn",
    "start": 723,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "JSXIdentifier",
    "value": "optionalBool",
    "start": 747,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "True",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "attrs2",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "optionalBool",
    "start": 785,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 799,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 804,
    "end": 806
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "mandatoryFn",
    "start": 813,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859
  },
  {
    "type": "JSXIdentifier",
    "value": "Funk",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "attrs2",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 877,
    "end": 878
  }
]
```

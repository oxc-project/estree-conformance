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
        "name": "PoisonedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 99
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 124,
                  "end": 125
                },
                "start": 124,
                "end": 125
              },
              "start": 122,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 126
          }
        ],
        "start": 100,
        "end": 128
      },
      "declare": false,
      "start": 77,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 144
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
          "start": 153,
          "end": 158
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 168
        },
        "optional": false,
        "computed": false,
        "start": 153,
        "end": 168
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 181
            },
            "typeArguments": null,
            "start": 169,
            "end": 181
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 183,
            "end": 185
          }
        ],
        "start": 168,
        "end": 186
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
              "start": 193,
              "end": 199
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
                          "start": 220,
                          "end": 223
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 219,
                        "end": 224
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 224,
                          "end": 229
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 231,
                          "end": 234
                        },
                        "start": 229,
                        "end": 235
                      },
                      "start": 219,
                      "end": 235
                    },
                    "start": 212,
                    "end": 236
                  }
                ],
                "start": 202,
                "end": 242
              },
              "expression": false,
              "start": 199,
              "end": 242
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 193,
            "end": 242
          }
        ],
        "start": 187,
        "end": 244
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 244
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 253
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "\"hello world\"",
                  "start": 265,
                  "end": 278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 278
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 287,
                  "end": 288
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 284,
                "end": 288
              }
            ],
            "start": 256,
            "end": 290
          },
          "definite": false,
          "start": 250,
          "end": 290
        }
      ],
      "declare": false,
      "start": 246,
      "end": 291
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 350
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 354,
                "end": 362
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 370
                  },
                  "start": 363,
                  "end": 371
                }
              ],
              "selfClosing": true,
              "start": 353,
              "end": 374
            },
            "children": [],
            "closingElement": null,
            "start": 353,
            "end": 374
          },
          "definite": false,
          "start": 349,
          "end": 374
        }
      ],
      "declare": false,
      "start": 345,
      "end": 375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 392
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
          "start": 401,
          "end": 406
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 416
        },
        "optional": false,
        "computed": false,
        "start": 401,
        "end": 416
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 417,
            "end": 419
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 421,
            "end": 423
          }
        ],
        "start": 416,
        "end": 424
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
              "start": 431,
              "end": 437
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
                          "start": 458,
                          "end": 461
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 457,
                        "end": 462
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Default hi",
                          "raw": "Default hi",
                          "start": 462,
                          "end": 472
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 474,
                          "end": 477
                        },
                        "start": 472,
                        "end": 478
                      },
                      "start": 457,
                      "end": 478
                    },
                    "start": 450,
                    "end": 479
                  }
                ],
                "start": 440,
                "end": 485
              },
              "expression": false,
              "start": 437,
              "end": 485
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 485
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 498
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              },
              "start": 498,
              "end": 506
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 490,
            "end": 507
          }
        ],
        "start": 425,
        "end": 509
      },
      "abstract": false,
      "declare": false,
      "start": 377,
      "end": 509
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 516
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
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 530
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 532,
                  "end": 537
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 525,
                "end": 537
              }
            ],
            "start": 519,
            "end": 539
          },
          "definite": false,
          "start": 515,
          "end": 539
        }
      ],
      "declare": false,
      "start": 511,
      "end": 539
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 551
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 555,
                "end": 564
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 570
                  },
                  "start": 565,
                  "end": 571
                }
              ],
              "selfClosing": true,
              "start": 554,
              "end": 574
            },
            "children": [],
            "closingElement": null,
            "start": 554,
            "end": 574
          },
          "definite": false,
          "start": 550,
          "end": 574
        }
      ],
      "declare": false,
      "start": 546,
      "end": 575
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 575
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
    "value": "PoisonedProp",
    "start": 87,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Poisoned",
    "start": 136,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 145,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "PoisonedProp",
    "start": 169,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 230,
    "end": 231
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "\"hello world\"",
    "start": 265,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "JSXIdentifier",
    "value": "Poisoned",
    "start": 354,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "EmptyProp",
    "start": 383,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "render",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
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
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "JSXText",
    "value": "Default hi",
    "start": 462,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 473,
    "end": 474
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 532,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 546,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptyProp",
    "start": 555,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Punctuator",
    "value": "/",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  }
]
```

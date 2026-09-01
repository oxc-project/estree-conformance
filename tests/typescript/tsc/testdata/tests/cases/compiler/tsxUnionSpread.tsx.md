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
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          }
        ],
        "start": 14,
        "end": 49
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CatInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 70
        },
        "typeParameters": null,
        "typeAnnotation": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Cat",
                    "raw": "'Cat'",
                    "start": 81,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "start": 79,
                "end": 86
              },
              "accessibility": null,
              "static": false,
              "start": 75,
              "end": 87
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                },
                "start": 95,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 88,
              "end": 104
            }
          ],
          "start": 73,
          "end": 106
        },
        "declare": false,
        "start": 58,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 51,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DogInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 127
        },
        "typeParameters": null,
        "typeAnnotation": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Dog",
                    "raw": "'Dog'",
                    "start": 138,
                    "end": 143
                  },
                  "start": 138,
                  "end": 143
                },
                "start": 136,
                "end": 143
              },
              "accessibility": null,
              "static": false,
              "start": 132,
              "end": 144
            }
          ],
          "start": 130,
          "end": 146
        },
        "declare": false,
        "start": 115,
        "end": 147
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 108,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnimalInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 170
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
                "name": "CatInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 180
              },
              "typeArguments": null,
              "start": 173,
              "end": 180
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DogInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 190
              },
              "typeArguments": null,
              "start": 183,
              "end": 190
            }
          ],
          "start": 173,
          "end": 190
        },
        "declare": false,
        "start": 155,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 148,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 217
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "info",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnimalInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 234
              },
              "typeArguments": null,
              "start": 224,
              "end": 234
            },
            "start": 222,
            "end": 234
          },
          "start": 218,
          "end": 234
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 240
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 248
            },
            "start": 237,
            "end": 248
          },
          "typeArguments": null,
          "start": 237,
          "end": 248
        },
        "start": 235,
        "end": 248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 271
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 275,
                "end": 278
              },
              "start": 262,
              "end": 278
            },
            "start": 255,
            "end": 279
          }
        ],
        "start": 249,
        "end": 281
      },
      "expression": false,
      "start": 193,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 300
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnimalInfo",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 314
          },
          "typeArguments": null,
          "start": 304,
          "end": 314
        },
        "start": 302,
        "end": 314
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 381
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Cat",
                    "raw": "'Cat'",
                    "start": 383,
                    "end": 388
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 377,
                  "end": 388
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 397
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Large",
                    "raw": "'Large'",
                    "start": 399,
                    "end": 406
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 390,
                  "end": 406
                }
              ],
              "start": 375,
              "end": 408
            },
            "start": 368,
            "end": 409
          }
        ],
        "start": 315,
        "end": 411
      },
      "expression": false,
      "start": 283,
      "end": 411
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 433
                },
                "typeArguments": null,
                "start": 423,
                "end": 433
              },
              "start": 422,
              "end": 433
            },
            "start": 417,
            "end": 433
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 444
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 436,
            "end": 446
          },
          "definite": false,
          "start": 417,
          "end": 446
        }
      ],
      "declare": false,
      "start": 413,
      "end": 447
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
            "name": "component",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 461
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnimalComponent",
                "start": 465,
                "end": 480
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
                    "start": 485,
                    "end": 490
                  },
                  "start": 481,
                  "end": 491
                }
              ],
              "selfClosing": true,
              "start": 464,
              "end": 494
            },
            "children": [],
            "closingElement": null,
            "start": 464,
            "end": 494
          },
          "definite": false,
          "start": 452,
          "end": 494
        }
      ],
      "declare": false,
      "start": 448,
      "end": 494
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
            "name": "props2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 517
                },
                "typeArguments": null,
                "start": 507,
                "end": 517
              },
              "start": 506,
              "end": 517
            },
            "start": 500,
            "end": 517
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 526
                },
                "value": {
                  "type": "Literal",
                  "value": "Cat",
                  "raw": "'Cat'",
                  "start": 528,
                  "end": 533
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 522,
                "end": 533
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 542
                },
                "value": {
                  "type": "Literal",
                  "value": "Large",
                  "raw": "'Large'",
                  "start": 544,
                  "end": 551
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 535,
                "end": 551
              }
            ],
            "start": 520,
            "end": 553
          },
          "definite": false,
          "start": 500,
          "end": 553
        }
      ],
      "declare": false,
      "start": 496,
      "end": 554
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
            "name": "component2",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 569
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnimalComponent",
                "start": 573,
                "end": 588
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 599
                  },
                  "start": 589,
                  "end": 600
                }
              ],
              "selfClosing": true,
              "start": 572,
              "end": 603
            },
            "children": [],
            "closingElement": null,
            "start": 572,
            "end": 603
          },
          "definite": false,
          "start": 559,
          "end": 603
        }
      ],
      "declare": false,
      "start": 555,
      "end": 603
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 603
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "CatInfo",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "'Cat'",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "subType",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "DogInfo",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "'Dog'",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 155,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "AnimalInfo",
    "start": 160,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "CatInfo",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "DogInfo",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 193,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "AnimalComponent",
    "start": 202,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "info",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "AnimalInfo",
    "start": 224,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 255,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 262,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "getProps",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "AnimalInfo",
    "start": 304,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "String",
    "value": "'Cat'",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "subType",
    "start": 390,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "'Large'",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "AnimalInfo",
    "start": 423,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "getProps",
    "start": 436,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 452,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465
  },
  {
    "type": "JSXIdentifier",
    "value": "AnimalComponent",
    "start": 465,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "props2",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "AnimalInfo",
    "start": 507,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 522,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "'Cat'",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "subType",
    "start": 535,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "String",
    "value": "'Large'",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "component2",
    "start": 559,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "JSXIdentifier",
    "value": "AnimalComponent",
    "start": 573,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "props2",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 602,
    "end": 603
  }
]
```

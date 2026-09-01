__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "noPrivates",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 21
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 50
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
                        "start": 53,
                        "end": 56
                      },
                      "expression": false,
                      "start": 50,
                      "end": 56
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 36,
                    "end": 56
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 65
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
                        "start": 68,
                        "end": 71
                      },
                      "expression": false,
                      "start": 65,
                      "end": 71
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 61,
                    "end": 71
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 93
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 97,
                        "end": 98
                      },
                      "prefix": true,
                      "start": 96,
                      "end": 98
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 76,
                    "end": 98
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 115,
                      "end": 117
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 103,
                    "end": 117
                  }
                ],
                "start": 30,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 24,
              "end": 119
            },
            "definite": false,
            "start": 11,
            "end": 119
          }
        ],
        "declare": false,
        "start": 7,
        "end": 119
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 119
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooItem",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 194
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 204
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 208,
                    "end": 212
                  },
                  "start": 206,
                  "end": 212
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 213,
                  "end": 216
                },
                "expression": false,
                "start": 204,
                "end": 216
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 201,
              "end": 216
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 228,
                  "end": 234
                },
                "start": 226,
                "end": 234
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 221,
              "end": 235
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 256
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "capitalism",
                "raw": "\"capitalism\"",
                "start": 259,
                "end": 271
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 240,
              "end": 271
            }
          ],
          "start": 195,
          "end": 273
        },
        "abstract": false,
        "declare": false,
        "start": 181,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 174,
      "end": 273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 298
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 299,
              "end": 300
            }
          ],
          "start": 298,
          "end": 301
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 315
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 317,
                    "end": 320
                  },
                  "start": 317,
                  "end": 322
                },
                "start": 315,
                "end": 322
              },
              "value": null,
              "start": 308,
              "end": 322
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 328
              },
              "typeArguments": null,
              "start": 327,
              "end": 328
            },
            "start": 324,
            "end": 328
          },
          "start": 304,
          "end": 328
        },
        "declare": false,
        "start": 282,
        "end": 329
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 275,
      "end": 329
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithTags",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 354
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 376
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 384
                      },
                      "typeArguments": null,
                      "start": 377,
                      "end": 384
                    }
                  ],
                  "start": 376,
                  "end": 385
                },
                "start": 365,
                "end": 385
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 355,
              "end": 385
            }
          ],
          "start": 354,
          "end": 386
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "typeArguments": null,
                "start": 393,
                "end": 394
              },
              "start": 391,
              "end": 394
            },
            "start": 387,
            "end": 394
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 427
                },
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
                        "name": "getTags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 452
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 456,
                            "end": 460
                          },
                          "start": 454,
                          "end": 460
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 461,
                          "end": 464
                        },
                        "expression": false,
                        "start": 452,
                        "end": 464
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 438,
                      "end": 464
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 477
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 481,
                            "end": 485
                          },
                          "start": 479,
                          "end": 485
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 486,
                          "end": 489
                        },
                        "expression": false,
                        "start": 477,
                        "end": 489
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 473,
                      "end": 489
                    }
                  ],
                  "start": 428,
                  "end": 495
                },
                "abstract": false,
                "declare": false,
                "start": 409,
                "end": 495
              },
              "start": 402,
              "end": 495
            }
          ],
          "start": 396,
          "end": 497
        },
        "expression": false,
        "start": 337,
        "end": 497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 330,
      "end": 497
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 516
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithTags",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 533
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "FooItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 541
            }
          ],
          "optional": false,
          "start": 525,
          "end": 542
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 543,
          "end": 545
        },
        "abstract": false,
        "declare": false,
        "start": 506,
        "end": 545
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 499,
      "end": 545
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 557
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 568
            },
            "typeArguments": null,
            "arguments": [],
            "start": 560,
            "end": 570
          },
          "definite": false,
          "start": 553,
          "end": 570
        }
      ],
      "declare": false,
      "start": 547,
      "end": 571
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 577
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getTags",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 585
          },
          "optional": false,
          "computed": false,
          "start": 573,
          "end": 585
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 573,
        "end": 587
      },
      "directive": null,
      "start": 573,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 592
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tags",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 597
          },
          "optional": false,
          "computed": false,
          "start": 588,
          "end": 597
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 588,
        "end": 599
      },
      "directive": null,
      "start": 588,
      "end": 600
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 600
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "noPrivates",
    "start": 11,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "ps",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 103,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 174,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 240,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 248,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "\"capitalism\"",
    "start": 259,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 282,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 287,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 337,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "WithTags",
    "start": 346,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 357,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 365,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 402,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 409,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 415,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 438,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 481,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 499,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 506,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 512,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 517,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "WithTags",
    "start": 525,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  }
]
```

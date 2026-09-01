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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 13,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 32
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 32
          },
          "exportKind": "value",
          "start": 30,
          "end": 32
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 16,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 20,
          "end": 22
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 16,
          "end": 18
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "importKind": "value",
          "start": 9,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "\"./type1\"",
        "start": 19,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 44
          },
          "start": 37,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "\"./type1\"",
        "start": 50,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 30,
      "end": 60
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 77
          },
          "importKind": "value",
          "start": 75,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type2",
        "raw": "\"./type2\"",
        "start": 85,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 61,
      "end": 95
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "importKind": "value",
          "start": 105,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./class3",
        "raw": "\"./class3\"",
        "start": 115,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 126
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
            "name": "EventListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 154,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 139,
            "end": 157
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 157
        }
      ],
      "declare": true,
      "start": 127,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 176
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 195
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 196,
                      "end": 199
                    }
                  ],
                  "optional": false,
                  "start": 182,
                  "end": 200
                },
                "start": 181,
                "end": 200
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent1",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 215
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
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 223,
                      "end": 225
                    },
                    "start": 221,
                    "end": 225
                  },
                  "start": 216,
                  "end": 225
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 227,
                "end": 229
              },
              "expression": false,
              "start": 215,
              "end": 229
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 258
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 259,
                      "end": 262
                    }
                  ],
                  "optional": false,
                  "start": 245,
                  "end": 263
                },
                "start": 244,
                "end": 263
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 278
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
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 288
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 288
                    },
                    "start": 284,
                    "end": 288
                  },
                  "start": 279,
                  "end": 288
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 290,
                "end": 292
              },
              "expression": false,
              "start": 278,
              "end": 292
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 292
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 316
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 317,
                      "end": 320
                    }
                  ],
                  "optional": false,
                  "start": 303,
                  "end": 321
                },
                "start": 302,
                "end": 321
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 331
                },
                "typeArguments": null,
                "start": 329,
                "end": 331
              },
              "start": 327,
              "end": 331
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 302,
            "end": 332
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 359
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 360,
                      "end": 363
                    }
                  ],
                  "optional": false,
                  "start": 346,
                  "end": 364
                },
                "start": 345,
                "end": 364
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 377
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 380
                  },
                  "start": 375,
                  "end": 380
                },
                "typeArguments": null,
                "start": 375,
                "end": 380
              },
              "start": 373,
              "end": 380
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 345,
            "end": 381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 405
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 406,
                      "end": 409
                    }
                  ],
                  "optional": false,
                  "start": 392,
                  "end": 410
                },
                "start": 391,
                "end": 410
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 420
                },
                "typeArguments": null,
                "start": 418,
                "end": 420
              },
              "start": 416,
              "end": 420
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 391,
            "end": 421
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventListener",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 445
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "3",
                      "raw": "'3'",
                      "start": 446,
                      "end": 449
                    }
                  ],
                  "optional": false,
                  "start": 432,
                  "end": 450
                },
                "start": 431,
                "end": 450
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleEvent3",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 465
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
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 475
                      },
                      "typeArguments": null,
                      "start": 473,
                      "end": 475
                    },
                    "start": 471,
                    "end": 475
                  },
                  "start": 466,
                  "end": 475
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 480
                  },
                  "typeArguments": null,
                  "start": 478,
                  "end": 480
                },
                "start": 476,
                "end": 480
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 499
                      },
                      "start": 490,
                      "end": 500
                    },
                    "start": 483,
                    "end": 500
                  }
                ],
                "start": 481,
                "end": 502
              },
              "expression": false,
              "start": 465,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 502
          }
        ],
        "start": 177,
        "end": 517
      },
      "abstract": false,
      "declare": false,
      "start": 160,
      "end": 517
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./type1\"",
    "start": 19,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"./type1\"",
    "start": 50,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 61,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
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
    "value": "T2",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 80,
    "end": 84
  },
  {
    "type": "String",
    "value": "\"./type2\"",
    "start": 85,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 110,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"./class3\"",
    "start": 115,
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
    "value": "declare",
    "start": 127,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 139,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "HelloWorld",
    "start": 166,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 182,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "handleEvent1",
    "start": 203,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 245,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "handleEvent2",
    "start": 266,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 303,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 346,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "p1_ns",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 392,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "EventListener",
    "start": 432,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "handleEvent3",
    "start": 453,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 490,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 29
                },
                "optional": false,
                "computed": false,
                "start": 17,
                "end": 29
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 30,
                  "end": 33
                }
              ],
              "optional": false,
              "start": 17,
              "end": 34
            },
            "definite": false,
            "start": 13,
            "end": 34
          }
        ],
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 55,
                  "end": 56
                }
              ],
              "start": 53,
              "end": 58
            },
            "definite": false,
            "start": 49,
            "end": 58
          }
        ],
        "declare": false,
        "start": 43,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 59
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                }
              ],
              "start": 77,
              "end": 80
            },
            "definite": false,
            "start": 73,
            "end": 80
          }
        ],
        "declare": false,
        "start": 67,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 81
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 101
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 121
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 129
                  },
                  "optional": false,
                  "computed": false,
                  "start": 117,
                  "end": 129
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "null",
                    "raw": "\"null\"",
                    "start": 130,
                    "end": 136
                  }
                ],
                "optional": false,
                "start": 117,
                "end": 137
              },
              "start": 110,
              "end": 138
            }
          ],
          "start": 104,
          "end": 140
        },
        "expression": false,
        "start": 90,
        "end": 140
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 83,
      "end": 140
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 160
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 164,
                "end": 171
              },
              "start": 162,
              "end": 171
            },
            "start": 161,
            "end": 171
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 190
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRawJSON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 200
                    },
                    "optional": false,
                    "computed": false,
                    "start": 186,
                    "end": 200
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 202
                    }
                  ],
                  "optional": false,
                  "start": 186,
                  "end": 203
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 219
                },
                "start": 186,
                "end": 219
              },
              "start": 179,
              "end": 220
            }
          ],
          "start": 173,
          "end": 222
        },
        "expression": false,
        "start": 149,
        "end": 222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 142,
      "end": 222
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 242
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 253
                },
                "typeArguments": null,
                "start": 246,
                "end": 253
              },
              "start": 244,
              "end": 253
            },
            "start": 243,
            "end": 253
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 256,
            "end": 262
          },
          "start": 254,
          "end": 262
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 285
                },
                "optional": false,
                "computed": false,
                "start": 276,
                "end": 285
              },
              "start": 269,
              "end": 286
            }
          ],
          "start": 263,
          "end": 288
        },
        "expression": false,
        "start": 231,
        "end": 288
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 304
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 328
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 336
                  },
                  "optional": false,
                  "computed": false,
                  "start": 324,
                  "end": 336
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "true",
                    "raw": "\"true\"",
                    "start": 337,
                    "end": 343
                  }
                ],
                "optional": false,
                "start": 324,
                "end": 344
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 311,
              "end": 345
            }
          ],
          "start": 305,
          "end": 347
        },
        "abstract": false,
        "declare": false,
        "start": 297,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 290,
      "end": 347
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 363
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 387
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 404,
                      "end": 410
                    },
                    "start": 402,
                    "end": 410
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 398,
                  "end": 411
                }
              ],
              "start": 388,
              "end": 417
            },
            "declare": false,
            "start": 370,
            "end": 417
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 437
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RawJSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 461
                      },
                      "typeArguments": null,
                      "start": 454,
                      "end": 461
                    },
                    "start": 452,
                    "end": 461
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 448,
                  "end": 462
                }
              ],
              "start": 438,
              "end": 468
            },
            "declare": false,
            "start": 423,
            "end": 468
          }
        ],
        "start": 364,
        "end": 470
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 349,
      "end": 470
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "init": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 492
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 492
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 489,
                "end": 496
              },
              "start": 489,
              "end": 496
            },
            "definite": false,
            "start": 485,
            "end": 496
          }
        ],
        "declare": false,
        "start": 479,
        "end": 497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 497
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "init": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 515,
                    "end": 519
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 521
                  },
                  "optional": false,
                  "computed": false,
                  "start": 515,
                  "end": 521
                },
                "typeArguments": null,
                "arguments": [],
                "optional": true,
                "start": 515,
                "end": 525
              },
              "start": 515,
              "end": 525
            },
            "definite": false,
            "start": 511,
            "end": 525
          }
        ],
        "declare": false,
        "start": 505,
        "end": 526
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 498,
      "end": 526
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 526
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 83,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "isRawJSON",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 210,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 224,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 231,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 269,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 278,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
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
    "value": "class",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 349,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 370,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 423,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 498,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "start": 222,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 234
        }
      ],
      "declare": true,
      "start": 210,
      "end": 235
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 257,
          "end": 269
        },
        "start": 249,
        "end": 270
      },
      "importKind": "value",
      "start": 237,
      "end": 271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 291
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "configPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 316
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 321
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 336
                    },
                    "optional": false,
                    "computed": false,
                    "start": 319,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "./",
                      "raw": "\"./\"",
                      "start": 352,
                      "end": 356
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 364
                        },
                        "optional": false,
                        "computed": false,
                        "start": 358,
                        "end": 364
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 375
                      },
                      "optional": false,
                      "computed": false,
                      "start": 358,
                      "end": 375
                    },
                    {
                      "type": "Literal",
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\"",
                      "start": 377,
                      "end": 392
                    }
                  ],
                  "optional": false,
                  "start": 319,
                  "end": 393
                },
                "definite": false,
                "start": 306,
                "end": 393
              }
            ],
            "declare": false,
            "start": 300,
            "end": 394
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "configPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 414
              },
              "prefix": true,
              "start": 403,
              "end": 414
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 441
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "start": 442,
                        "end": 483
                      }
                    ],
                    "start": 432,
                    "end": 484
                  },
                  "start": 426,
                  "end": 485
                }
              ],
              "start": 416,
              "end": 491
            },
            "alternate": null,
            "start": 399,
            "end": 491
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
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1481
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1486
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1510
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1484,
                    "end": 1510
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1511,
                      "end": 1521
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1523,
                      "end": 1525
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1527,
                        "end": 1529
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1530,
                        "end": 1533
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1527,
                      "end": 1533
                    }
                  ],
                  "optional": false,
                  "start": 1484,
                  "end": 1534
                },
                "definite": false,
                "start": 1477,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1471,
            "end": 1535
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
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1753,
                  "end": 1770
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1773,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1791
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1773,
                  "end": 1791
                },
                "definite": false,
                "start": 1753,
                "end": 1791
              }
            ],
            "declare": false,
            "start": 1747,
            "end": 1792
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1797,
                  "end": 1801
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1802,
                  "end": 1815
                },
                "optional": false,
                "computed": false,
                "start": 1797,
                "end": 1815
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1819,
                    "end": 1828
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1830,
                    "end": 1837
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1839,
                    "end": 1843
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1855
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1870,
                            "end": 1877
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1878,
                            "end": 1881
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1870,
                          "end": 1881
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\"",
                            "start": 1882,
                            "end": 1924
                          }
                        ],
                        "optional": false,
                        "start": 1870,
                        "end": 1925
                      },
                      "directive": null,
                      "start": 1870,
                      "end": 1926
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1942,
                          "end": 1959
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1960,
                            "end": 1969
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1971,
                            "end": 1978
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1980,
                            "end": 1984
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1986,
                            "end": 1996
                          }
                        ],
                        "optional": false,
                        "start": 1942,
                        "end": 1997
                      },
                      "start": 1935,
                      "end": 1998
                    }
                  ],
                  "start": 1860,
                  "end": 2004
                },
                "id": null,
                "generator": false,
                "start": 1818,
                "end": 2004
              },
              "start": 1797,
              "end": 2004
            },
            "directive": null,
            "start": 1797,
            "end": 2004
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
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2015,
                  "end": 2036
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2043
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2044,
                    "end": 2062
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2039,
                  "end": 2062
                },
                "definite": false,
                "start": 2015,
                "end": 2062
              }
            ],
            "declare": false,
            "start": 2009,
            "end": 2063
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2069,
                  "end": 2073
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2074,
                  "end": 2092
                },
                "optional": false,
                "computed": false,
                "start": 2069,
                "end": 2092
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2095,
                    "end": 2102
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2116,
                            "end": 2123
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2124,
                            "end": 2127
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2116,
                          "end": 2127
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\"",
                            "start": 2128,
                            "end": 2167
                          }
                        ],
                        "optional": false,
                        "start": 2116,
                        "end": 2168
                      },
                      "directive": null,
                      "start": 2116,
                      "end": 2169
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2178,
                            "end": 2199
                          },
                          "start": 2178,
                          "end": 2200
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2201,
                            "end": 2208
                          }
                        ],
                        "optional": false,
                        "start": 2178,
                        "end": 2209
                      },
                      "directive": null,
                      "start": 2178,
                      "end": 2210
                    }
                  ],
                  "start": 2106,
                  "end": 2216
                },
                "id": null,
                "generator": false,
                "start": 2095,
                "end": 2216
              },
              "start": 2069,
              "end": 2216
            },
            "directive": null,
            "start": 2069,
            "end": 2217
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
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2332,
                  "end": 2350
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2350
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2355
                }
              ],
              "optional": false,
              "start": 2329,
              "end": 2356
            },
            "directive": null,
            "start": 2329,
            "end": 2357
          }
        ],
        "start": 294,
        "end": 2359
      },
      "expression": false,
      "start": 273,
      "end": 2359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null,
          "start": 2361,
          "end": 2370
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2361,
        "end": 2372
      },
      "directive": null,
      "start": 2361,
      "end": 2373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 210,
  "end": 2373
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
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
    "value": "import",
    "start": 237,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 257,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 273,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 306,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "findConfigFile",
    "start": 322,
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
    "value": "\"./\"",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 365,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "\"tsconfig.json\"",
    "start": 377,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 404,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 426,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "\"Could not find a valid 'tsconfig.json'.\"",
    "start": 442,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1471,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1484,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "createWatchCompilerHost",
    "start": 1487,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 1511,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1753,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1773,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1778,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1797,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1802,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 1819,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1830,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1839,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1845,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1857,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1870,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "String",
    "value": "\"** We're about to create the program! **\"",
    "start": 1882,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1942,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 1960,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1971,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1980,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1986,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2009,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2015,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2039,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2044,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2069,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2074,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2095,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2116,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "String",
    "value": "\"** We finished making the program! **\"",
    "start": 2128,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2178,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2201,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2329,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "createWatchProgram",
    "start": 2332,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2351,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 2361,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2372,
    "end": 2373
  }
]
```

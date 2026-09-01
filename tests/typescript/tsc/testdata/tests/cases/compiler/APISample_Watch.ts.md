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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              },
              "start": 332,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": true,
      "start": 313,
      "end": 338
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "start": 351,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 363
        }
      ],
      "declare": true,
      "start": 339,
      "end": 364
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
            "name": "os",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
              },
              "start": 379,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 384
        }
      ],
      "declare": true,
      "start": 365,
      "end": 385
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 396
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 407,
          "end": 419
        },
        "start": 399,
        "end": 420
      },
      "importKind": "value",
      "start": 387,
      "end": 421
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
            "name": "formatHost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 443
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FormatDiagnosticsHost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 465
                  },
                  "start": 441,
                  "end": 465
                },
                "typeArguments": null,
                "start": 441,
                "end": 465
              },
              "start": 439,
              "end": 465
            },
            "start": 429,
            "end": 465
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
                  "name": "getCanonicalFileName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 494
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
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 500
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 508
                  },
                  "id": null,
                  "generator": false,
                  "start": 496,
                  "end": 508
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 508
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getCurrentDirectory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 533
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 537
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 541
                    },
                    "optional": false,
                    "computed": false,
                    "start": 535,
                    "end": 541
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getCurrentDirectory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 561
                  },
                  "optional": false,
                  "computed": false,
                  "start": 535,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 514,
                "end": 561
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getNewLine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 577
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 587
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 588,
                        "end": 591
                      },
                      "optional": false,
                      "computed": false,
                      "start": 585,
                      "end": 591
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newLine",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 592,
                      "end": 599
                    },
                    "optional": false,
                    "computed": false,
                    "start": 585,
                    "end": 599
                  },
                  "id": null,
                  "generator": false,
                  "start": 579,
                  "end": 599
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 567,
                "end": 599
              }
            ],
            "start": 468,
            "end": 602
          },
          "definite": false,
          "start": 429,
          "end": 602
        }
      ],
      "declare": false,
      "start": 423,
      "end": 602
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 622
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
                  "start": 637,
                  "end": 647
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
                      "start": 650,
                      "end": 652
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 667
                    },
                    "optional": false,
                    "computed": false,
                    "start": 650,
                    "end": 667
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "./",
                      "raw": "\"./\"",
                      "start": 683,
                      "end": 687
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
                          "start": 689,
                          "end": 691
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 692,
                          "end": 695
                        },
                        "optional": false,
                        "computed": false,
                        "start": 689,
                        "end": 695
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 706
                      },
                      "optional": false,
                      "computed": false,
                      "start": 689,
                      "end": 706
                    },
                    {
                      "type": "Literal",
                      "value": "tsconfig.json",
                      "raw": "\"tsconfig.json\"",
                      "start": 708,
                      "end": 723
                    }
                  ],
                  "optional": false,
                  "start": 650,
                  "end": 724
                },
                "definite": false,
                "start": 637,
                "end": 724
              }
            ],
            "declare": false,
            "start": 631,
            "end": 725
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
                "start": 735,
                "end": 745
              },
              "prefix": true,
              "start": 734,
              "end": 745
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
                      "start": 767,
                      "end": 772
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "start": 773,
                        "end": 814
                      }
                    ],
                    "start": 763,
                    "end": 815
                  },
                  "start": 757,
                  "end": 816
                }
              ],
              "start": 747,
              "end": 822
            },
            "alternate": null,
            "start": 730,
            "end": 822
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
                  "start": 1808,
                  "end": 1812
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
                      "start": 1815,
                      "end": 1817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1841
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1815,
                    "end": 1841
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1842,
                      "end": 1852
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1854,
                      "end": 1856
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1860
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1861,
                        "end": 1864
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1858,
                      "end": 1864
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1874,
                        "end": 1876
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createSemanticDiagnosticsBuilderProgram",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1877,
                        "end": 1916
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1874,
                      "end": 1916
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reportDiagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1926,
                      "end": 1942
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reportWatchStatusChanged",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1976
                    }
                  ],
                  "optional": false,
                  "start": 1815,
                  "end": 1983
                },
                "definite": false,
                "start": 1808,
                "end": 1983
              }
            ],
            "declare": false,
            "start": 1802,
            "end": 1984
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
                  "start": 2202,
                  "end": 2219
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2222,
                    "end": 2226
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2227,
                    "end": 2240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2222,
                  "end": 2240
                },
                "definite": false,
                "start": 2202,
                "end": 2240
              }
            ],
            "declare": false,
            "start": 2196,
            "end": 2241
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
                  "start": 2246,
                  "end": 2250
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2251,
                  "end": 2264
                },
                "optional": false,
                "computed": false,
                "start": 2246,
                "end": 2264
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
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2279,
                              "end": 2292
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2293,
                                  "end": 2299
                                }
                              ],
                              "start": 2292,
                              "end": 2300
                            },
                            "start": 2279,
                            "end": 2300
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2303,
                            "end": 2312
                          }
                        ],
                        "start": 2279,
                        "end": 2312
                      },
                      "start": 2277,
                      "end": 2312
                    },
                    "start": 2268,
                    "end": 2312
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2314,
                    "end": 2321
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2323,
                    "end": 2327
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2329,
                    "end": 2339
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
                            "start": 2354,
                            "end": 2361
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2362,
                            "end": 2365
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2354,
                          "end": 2365
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\"",
                            "start": 2366,
                            "end": 2408
                          }
                        ],
                        "optional": false,
                        "start": 2354,
                        "end": 2409
                      },
                      "directive": null,
                      "start": 2354,
                      "end": 2410
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
                          "start": 2426,
                          "end": 2443
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2444,
                            "end": 2453
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2455,
                            "end": 2462
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2464,
                            "end": 2468
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2470,
                            "end": 2480
                          }
                        ],
                        "optional": false,
                        "start": 2426,
                        "end": 2481
                      },
                      "start": 2419,
                      "end": 2482
                    }
                  ],
                  "start": 2344,
                  "end": 2488
                },
                "id": null,
                "generator": false,
                "start": 2267,
                "end": 2488
              },
              "start": 2246,
              "end": 2488
            },
            "directive": null,
            "start": 2246,
            "end": 2488
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
                  "start": 2499,
                  "end": 2520
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2523,
                    "end": 2527
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2528,
                    "end": 2546
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2523,
                  "end": 2546
                },
                "definite": false,
                "start": 2499,
                "end": 2546
              }
            ],
            "declare": false,
            "start": 2493,
            "end": 2547
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
                  "start": 2553,
                  "end": 2557
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2558,
                  "end": 2576
                },
                "optional": false,
                "computed": false,
                "start": 2553,
                "end": 2576
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
                    "start": 2579,
                    "end": 2586
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
                            "start": 2600,
                            "end": 2607
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2608,
                            "end": 2611
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2600,
                          "end": 2611
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\"",
                            "start": 2612,
                            "end": 2651
                          }
                        ],
                        "optional": false,
                        "start": 2600,
                        "end": 2652
                      },
                      "directive": null,
                      "start": 2600,
                      "end": 2653
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
                            "start": 2662,
                            "end": 2683
                          },
                          "start": 2662,
                          "end": 2684
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2685,
                            "end": 2692
                          }
                        ],
                        "optional": false,
                        "start": 2662,
                        "end": 2693
                      },
                      "directive": null,
                      "start": 2662,
                      "end": 2694
                    }
                  ],
                  "start": 2590,
                  "end": 2700
                },
                "id": null,
                "generator": false,
                "start": 2579,
                "end": 2700
              },
              "start": 2553,
              "end": 2700
            },
            "directive": null,
            "start": 2553,
            "end": 2701
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
                  "start": 2813,
                  "end": 2815
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2816,
                  "end": 2834
                },
                "optional": false,
                "computed": false,
                "start": 2813,
                "end": 2834
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2839
                }
              ],
              "optional": false,
              "start": 2813,
              "end": 2840
            },
            "directive": null,
            "start": 2813,
            "end": 2841
          }
        ],
        "start": 625,
        "end": 2843
      },
      "expression": false,
      "start": 604,
      "end": 2843
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reportDiagnostic",
        "optional": false,
        "typeAnnotation": null,
        "start": 2854,
        "end": 2870
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2883,
                  "end": 2885
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2886,
                  "end": 2896
                },
                "start": 2883,
                "end": 2896
              },
              "typeArguments": null,
              "start": 2883,
              "end": 2896
            },
            "start": 2881,
            "end": 2896
          },
          "start": 2871,
          "end": 2896
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
                  "start": 2904,
                  "end": 2911
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2912,
                  "end": 2917
                },
                "optional": false,
                "computed": false,
                "start": 2904,
                "end": 2917
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error",
                  "raw": "\"Error\"",
                  "start": 2918,
                  "end": 2925
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "diagnostic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2927,
                    "end": 2937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2938,
                    "end": 2942
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2927,
                  "end": 2942
                },
                {
                  "type": "Literal",
                  "value": ":",
                  "raw": "\":\"",
                  "start": 2944,
                  "end": 2947
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2957,
                      "end": 2959
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "flattenDiagnosticMessageText",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2960,
                      "end": 2988
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2957,
                    "end": 2988
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnostic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2989,
                        "end": 2999
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3000,
                        "end": 3011
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2989,
                      "end": 3011
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "formatHost",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3013,
                          "end": 3023
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getNewLine",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3024,
                          "end": 3034
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3013,
                        "end": 3034
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3013,
                      "end": 3036
                    }
                  ],
                  "optional": false,
                  "start": 2957,
                  "end": 3037
                }
              ],
              "optional": false,
              "start": 2904,
              "end": 3043
            },
            "directive": null,
            "start": 2904,
            "end": 3044
          }
        ],
        "start": 2898,
        "end": 3046
      },
      "expression": false,
      "start": 2845,
      "end": 3046
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reportWatchStatusChanged",
        "optional": false,
        "typeAnnotation": null,
        "start": 3212,
        "end": 3236
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "diagnostic",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3249,
                  "end": 3251
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3252,
                  "end": 3262
                },
                "start": 3249,
                "end": 3262
              },
              "typeArguments": null,
              "start": 3249,
              "end": 3262
            },
            "start": 3247,
            "end": 3262
          },
          "start": 3237,
          "end": 3262
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
                  "start": 3270,
                  "end": 3277
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3278,
                  "end": 3282
                },
                "optional": false,
                "computed": false,
                "start": 3270,
                "end": 3282
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3283,
                      "end": 3285
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "formatDiagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3286,
                      "end": 3302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3283,
                    "end": 3302
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "diagnostic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3303,
                      "end": 3313
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "formatHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3315,
                      "end": 3325
                    }
                  ],
                  "optional": false,
                  "start": 3283,
                  "end": 3326
                }
              ],
              "optional": false,
              "start": 3270,
              "end": 3327
            },
            "directive": null,
            "start": 3270,
            "end": 3328
          }
        ],
        "start": 3264,
        "end": 3330
      },
      "expression": false,
      "start": 3203,
      "end": 3330
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
          "start": 3332,
          "end": 3341
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3332,
        "end": 3343
      },
      "directive": null,
      "start": 3332,
      "end": 3344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 313,
  "end": 3344
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 365,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "os",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 387,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 429,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "FormatDiagnosticsHost",
    "start": 444,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "getCanonicalFileName",
    "start": 474,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 514,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 542,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "getNewLine",
    "start": 567,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 582,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "newLine",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 613,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 631,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "findConfigFile",
    "start": 653,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"tsconfig.json\"",
    "start": 708,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 735,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 757,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 767,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "String",
    "value": "\"Could not find a valid 'tsconfig.json'.\"",
    "start": 773,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1815,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "createWatchCompilerHost",
    "start": 1818,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "configPath",
    "start": 1842,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1858,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1861,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "createSemanticDiagnosticsBuilderProgram",
    "start": 1877,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "reportDiagnostic",
    "start": 1926,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "reportWatchStatusChanged",
    "start": 1952,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 2202,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2222,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 2227,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2246,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 2251,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 2268,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 2279,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2293,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2303,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2314,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 2329,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2341,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2354,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2362,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "String",
    "value": "\"** We're about to create the program! **\"",
    "start": 2366,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 2426,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 2444,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2455,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2464,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 2470,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2493,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2499,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2523,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2528,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2553,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 2558,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2579,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2587,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2600,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2608,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "String",
    "value": "\"** We finished making the program! **\"",
    "start": 2612,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 2662,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2685,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2813,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "createWatchProgram",
    "start": 2816,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2835,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2845,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "reportDiagnostic",
    "start": 2854,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2871,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2883,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 2886,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2904,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2912,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "String",
    "value": "\"Error\"",
    "start": 2918,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2927,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 2938,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "String",
    "value": "\":\"",
    "start": 2944,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2957,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "flattenDiagnosticMessageText",
    "start": 2960,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 2989,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "messageText",
    "start": 3000,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 3013,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "getNewLine",
    "start": 3024,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3203,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "reportWatchStatusChanged",
    "start": 3212,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3237,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3249,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "Diagnostic",
    "start": 3252,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3270,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "info",
    "start": 3278,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 3283,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "formatDiagnostic",
    "start": 3286,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "diagnostic",
    "start": 3303,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "formatHost",
    "start": 3315,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 3332,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3343,
    "end": 3344
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "testIncludes",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 28
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 32,
                    "end": 39
                  }
                ],
                "start": 31,
                "end": 40
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "includes",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
              },
              "optional": false,
              "computed": false,
              "start": 31,
              "end": 49
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 50,
                "end": 57
              }
            ],
            "optional": false,
            "start": 31,
            "end": 58
          },
          "definite": false,
          "start": 16,
          "end": 58
        }
      ],
      "declare": false,
      "start": 10,
      "end": 59
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
            "name": "testStringPadStart",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 95
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 98,
                "end": 100
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "padStart",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 98,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 110,
                "end": 111
              }
            ],
            "optional": false,
            "start": 98,
            "end": 112
          },
          "definite": false,
          "start": 77,
          "end": 112
        }
      ],
      "declare": false,
      "start": 71,
      "end": 113
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
            "name": "testStringPadEnd",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 136
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 139,
                "end": 141
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "padEnd",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 148
              },
              "optional": false,
              "computed": false,
              "start": 139,
              "end": 148
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 149,
                "end": 150
              }
            ],
            "optional": false,
            "start": 139,
            "end": 151
          },
          "definite": false,
          "start": 120,
          "end": 151
        }
      ],
      "declare": false,
      "start": 114,
      "end": 152
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
            "name": "testObjectConstructorValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 195
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 202
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 202
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 203,
                "end": 205
              }
            ],
            "optional": false,
            "start": 189,
            "end": 206
          },
          "definite": false,
          "start": 159,
          "end": 206
        }
      ],
      "declare": false,
      "start": 153,
      "end": 207
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
            "name": "testObjectConstructorEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 242
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 259
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 260,
                "end": 262
              }
            ],
            "optional": false,
            "start": 245,
            "end": 263
          },
          "definite": false,
          "start": 214,
          "end": 263
        }
      ],
      "declare": false,
      "start": 208,
      "end": 264
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
            "name": "testObjectConstructorGetOwnPropertyDescriptors",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 326
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertyDescriptors",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 352
              },
              "optional": false,
              "computed": false,
              "start": 320,
              "end": 352
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 353,
                "end": 355
              }
            ],
            "optional": false,
            "start": 320,
            "end": 356
          },
          "definite": false,
          "start": 271,
          "end": 356
        }
      ],
      "declare": false,
      "start": 265,
      "end": 357
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
            "name": "testIntlFormatToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 385
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 396
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 392,
                  "end": 411
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-US",
                    "raw": "\"en-US\"",
                    "start": 412,
                    "end": 419
                  }
                ],
                "start": 388,
                "end": 420
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 388,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 388,
            "end": 436
          },
          "definite": false,
          "start": 364,
          "end": 436
        }
      ],
      "declare": false,
      "start": 358,
      "end": 437
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
            "name": "testAtomics",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 455
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 469
              },
              "optional": false,
              "computed": false,
              "start": 458,
              "end": 469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uint8Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 485,
                    "end": 486
                  }
                ],
                "start": 470,
                "end": 487
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 489,
                "end": 490
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 492,
                "end": 493
              }
            ],
            "optional": false,
            "start": 458,
            "end": 494
          },
          "definite": false,
          "start": 444,
          "end": 494
        }
      ],
      "declare": false,
      "start": 438,
      "end": 495
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
            "name": "testSharedArrayBuffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 523
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 547
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 548,
                "end": 549
              }
            ],
            "start": 526,
            "end": 550
          },
          "definite": false,
          "start": 502,
          "end": 550
        }
      ],
      "declare": false,
      "start": 496,
      "end": 551
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
            "name": "testPromiseFinally",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 601
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 608,
                      "end": 610
                    },
                    "id": null,
                    "generator": false,
                    "start": 602,
                    "end": 610
                  }
                ],
                "start": 590,
                "end": 611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "finally",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 619
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 619
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 590,
            "end": 621
          },
          "definite": false,
          "start": 569,
          "end": 621
        }
      ],
      "declare": false,
      "start": 563,
      "end": 622
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
            "name": "testRegExpMatchArrayGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 655
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\"",
                  "start": 658,
                  "end": 670
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 676
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 676
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})",
                    "flags": "g"
                  },
                  "start": 677,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 658,
              "end": 734
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 741
            },
            "optional": false,
            "computed": false,
            "start": 658,
            "end": 741
          },
          "definite": false,
          "start": 629,
          "end": 741
        }
      ],
      "declare": false,
      "start": 623,
      "end": 742
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
            "name": "testRegExpExecArrayGroups",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 774
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
                  "regex": {
                    "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})",
                    "flags": "g"
                  },
                  "start": 777,
                  "end": 833
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 838
                },
                "optional": false,
                "computed": false,
                "start": 777,
                "end": 838
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "2019-04-30",
                  "raw": "\"2019-04-30\"",
                  "start": 839,
                  "end": 851
                }
              ],
              "optional": false,
              "start": 777,
              "end": 852
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "groups",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 859
            },
            "optional": false,
            "computed": false,
            "start": 777,
            "end": 859
          },
          "definite": false,
          "start": 749,
          "end": 859
        }
      ],
      "declare": false,
      "start": 743,
      "end": 860
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
            "name": "testRegExpDotAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 883
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/foo/g",
              "regex": {
                "pattern": "foo",
                "flags": "g"
              },
              "start": 886,
              "end": 892
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "dotAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 899
            },
            "optional": false,
            "computed": false,
            "start": 886,
            "end": 899
          },
          "definite": false,
          "start": 867,
          "end": 899
        }
      ],
      "declare": false,
      "start": 861,
      "end": 900
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
            "name": "testIntlPluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 933,
                    "end": 937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PluralRules",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 949
                  },
                  "optional": false,
                  "computed": false,
                  "start": 933,
                  "end": 949
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "ar-EG",
                    "raw": "\"ar-EG\"",
                    "start": 950,
                    "end": 957
                  }
                ],
                "start": 929,
                "end": 958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "select",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 965
              },
              "optional": false,
              "computed": false,
              "start": 929,
              "end": 965
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 966,
                "end": 967
              }
            ],
            "optional": false,
            "start": 929,
            "end": 968
          },
          "definite": false,
          "start": 907,
          "end": 968
        }
      ],
      "declare": false,
      "start": 901,
      "end": 969
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
            "name": "testAsyncGenerator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1010
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1011,
                      "end": 1014
                    }
                  ],
                  "start": 1010,
                  "end": 1015
                },
                "start": 996,
                "end": 1015
              },
              "start": 994,
              "end": 1015
            },
            "start": 976,
            "end": 1015
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1018,
              "end": 1022
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1026,
              "end": 1029
            },
            "start": 1018,
            "end": 1029
          },
          "definite": false,
          "start": 976,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 970,
      "end": 1030
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
            "name": "testAsyncGeneratorFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGeneratorFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1087
                },
                "typeArguments": null,
                "start": 1065,
                "end": 1087
              },
              "start": 1063,
              "end": 1087
            },
            "start": 1037,
            "end": 1087
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1090,
              "end": 1094
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1098,
              "end": 1101
            },
            "start": 1090,
            "end": 1101
          },
          "definite": false,
          "start": 1037,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1102
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
            "name": "testAsyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1141
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1142,
                      "end": 1145
                    }
                  ],
                  "start": 1141,
                  "end": 1146
                },
                "start": 1128,
                "end": 1146
              },
              "start": 1126,
              "end": 1146
            },
            "start": 1109,
            "end": 1146
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1149,
              "end": 1153
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1157,
              "end": 1160
            },
            "start": 1149,
            "end": 1160
          },
          "definite": false,
          "start": 1109,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1103,
      "end": 1161
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
            "name": "testAsyncIterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1195,
                  "end": 1216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1217,
                      "end": 1220
                    }
                  ],
                  "start": 1216,
                  "end": 1221
                },
                "start": 1195,
                "end": 1221
              },
              "start": 1193,
              "end": 1221
            },
            "start": 1168,
            "end": 1221
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1224,
              "end": 1228
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1232,
              "end": 1235
            },
            "start": 1224,
            "end": 1235
          },
          "definite": false,
          "start": 1168,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1236
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
            "name": "testNumberFormatFormatToParts",
            "optional": false,
            "typeAnnotation": null,
            "start": 1243,
            "end": 1272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1279,
                    "end": 1283
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1296
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1279,
                  "end": 1296
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-US",
                    "raw": "\"en-US\"",
                    "start": 1297,
                    "end": 1304
                  }
                ],
                "start": 1275,
                "end": 1305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1319
              },
              "optional": false,
              "computed": false,
              "start": 1275,
              "end": 1319
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1275,
            "end": 1321
          },
          "definite": false,
          "start": 1243,
          "end": 1321
        }
      ],
      "declare": false,
      "start": 1237,
      "end": 1322
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
            "name": "testArrayFlat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1356,
                "end": 1358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1359,
                "end": 1363
              },
              "optional": false,
              "computed": false,
              "start": 1356,
              "end": 1363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1356,
            "end": 1365
          },
          "definite": false,
          "start": 1340,
          "end": 1365
        }
      ],
      "declare": false,
      "start": 1334,
      "end": 1366
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
            "name": "testArrayFlatMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1392,
                "end": 1394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1402
              },
              "optional": false,
              "computed": false,
              "start": 1392,
              "end": 1402
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1392,
            "end": 1404
          },
          "definite": false,
          "start": 1373,
          "end": 1404
        }
      ],
      "declare": false,
      "start": 1367,
      "end": 1405
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
            "name": "testObjectConstructorFromEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1444
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1465
              },
              "optional": false,
              "computed": false,
              "start": 1447,
              "end": 1465
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1466,
                "end": 1468
              }
            ],
            "optional": false,
            "start": 1447,
            "end": 1469
          },
          "definite": false,
          "start": 1412,
          "end": 1469
        }
      ],
      "declare": false,
      "start": 1406,
      "end": 1470
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
            "name": "testStringTrimStart",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1496
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1499,
                "end": 1501
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimStart",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1511
              },
              "optional": false,
              "computed": false,
              "start": 1499,
              "end": 1511
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1499,
            "end": 1513
          },
          "definite": false,
          "start": 1477,
          "end": 1513
        }
      ],
      "declare": false,
      "start": 1471,
      "end": 1514
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
            "name": "testStringTrimEnd",
            "optional": false,
            "typeAnnotation": null,
            "start": 1521,
            "end": 1538
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1541,
                "end": 1543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimEnd",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1551
              },
              "optional": false,
              "computed": false,
              "start": 1541,
              "end": 1551
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1541,
            "end": 1553
          },
          "definite": false,
          "start": 1521,
          "end": 1553
        }
      ],
      "declare": false,
      "start": 1515,
      "end": 1554
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
            "name": "testStringTrimLeft",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1582,
                "end": 1584
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimLeft",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1593
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1593
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1582,
            "end": 1595
          },
          "definite": false,
          "start": 1561,
          "end": 1595
        }
      ],
      "declare": false,
      "start": 1555,
      "end": 1596
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
            "name": "testStringTrimRight",
            "optional": false,
            "typeAnnotation": null,
            "start": 1603,
            "end": 1622
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1625,
                "end": 1627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trimRight",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1637
              },
              "optional": false,
              "computed": false,
              "start": 1625,
              "end": 1637
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1625,
            "end": 1639
          },
          "definite": false,
          "start": 1603,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1597,
      "end": 1640
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
            "name": "testSymbolDescription",
            "optional": false,
            "typeAnnotation": null,
            "start": 1647,
            "end": 1668
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1671,
                "end": 1677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1678,
                  "end": 1683
                }
              ],
              "optional": false,
              "start": 1671,
              "end": 1684
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 1685,
              "end": 1696
            },
            "optional": false,
            "computed": false,
            "start": 1671,
            "end": 1696
          },
          "definite": false,
          "start": 1647,
          "end": 1696
        }
      ],
      "declare": false,
      "start": 1641,
      "end": 1697
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
            "name": "testPromiseAllSettled",
            "optional": false,
            "typeAnnotation": null,
            "start": 1715,
            "end": 1736
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1746
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "allSettled",
                "optional": false,
                "typeAnnotation": null,
                "start": 1747,
                "end": 1757
              },
              "optional": false,
              "computed": false,
              "start": 1739,
              "end": 1757
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1758,
                "end": 1760
              }
            ],
            "optional": false,
            "start": 1739,
            "end": 1761
          },
          "definite": false,
          "start": 1715,
          "end": 1761
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1762
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
            "name": "testStringMatchAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1787
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1790,
                "end": 1792
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1801
              },
              "optional": false,
              "computed": false,
              "start": 1790,
              "end": 1801
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1790,
            "end": 1803
          },
          "definite": false,
          "start": 1769,
          "end": 1803
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1804
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
            "name": "testRegExpMatchAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1829
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": null,
                "raw": "/matchAll/g",
                "regex": {
                  "pattern": "matchAll",
                  "flags": "g"
                },
                "start": 1832,
                "end": 1843
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1850
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1851,
                  "end": 1859
                },
                "optional": false,
                "computed": false,
                "start": 1844,
                "end": 1859
              },
              "optional": false,
              "computed": true,
              "start": 1832,
              "end": 1860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "matchAll",
                "raw": "\"matchAll\"",
                "start": 1861,
                "end": 1871
              }
            ],
            "optional": false,
            "start": 1832,
            "end": 1872
          },
          "definite": false,
          "start": 1811,
          "end": 1872
        }
      ],
      "declare": false,
      "start": 1805,
      "end": 1873
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
            "name": "testBigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 1880,
            "end": 1890
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1893,
              "end": 1899
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1900,
                "end": 1903
              }
            ],
            "optional": false,
            "start": 1893,
            "end": 1904
          },
          "definite": false,
          "start": 1880,
          "end": 1904
        }
      ],
      "declare": false,
      "start": 1874,
      "end": 1905
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
            "name": "testPromiseAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 1923,
            "end": 1937
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1940,
                "end": 1947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 1948,
                "end": 1951
              },
              "optional": false,
              "computed": false,
              "start": 1940,
              "end": 1951
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1952,
                "end": 1954
              }
            ],
            "optional": false,
            "start": 1940,
            "end": 1955
          },
          "definite": false,
          "start": 1923,
          "end": 1955
        }
      ],
      "declare": false,
      "start": 1917,
      "end": 1956
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
            "name": "testStringReplaceAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 1963,
            "end": 1983
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1986,
                "end": 1988
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1989,
                "end": 1999
              },
              "optional": false,
              "computed": false,
              "start": 1986,
              "end": 1999
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1986,
            "end": 2001
          },
          "definite": false,
          "start": 1963,
          "end": 2001
        }
      ],
      "declare": false,
      "start": 1957,
      "end": 2002
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
            "name": "testDateToTemporalInstant",
            "optional": false,
            "typeAnnotation": null,
            "start": 2020,
            "end": 2045
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2052,
                  "end": 2056
                },
                "typeArguments": null,
                "arguments": [],
                "start": 2048,
                "end": 2058
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toTemporalInstant",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2076
              },
              "optional": false,
              "computed": false,
              "start": 2048,
              "end": 2076
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2048,
            "end": 2078
          },
          "definite": false,
          "start": 2020,
          "end": 2078
        }
      ],
      "declare": false,
      "start": 2014,
      "end": 2079
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 2079
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "testIncludes",
    "start": 16,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "testStringPadStart",
    "start": 77,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "padStart",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "testStringPadEnd",
    "start": 120,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "padEnd",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorValues",
    "start": 159,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorEntries",
    "start": 214,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorGetOwnPropertyDescriptors",
    "start": 271,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "getOwnPropertyDescriptors",
    "start": 327,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "testIntlFormatToParts",
    "start": 364,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 397,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 412,
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
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "formatToParts",
    "start": 421,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "testAtomics",
    "start": 444,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "testSharedArrayBuffer",
    "start": 502,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 526,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "SharedArrayBuffer",
    "start": 530,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "testPromiseFinally",
    "start": 569,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "finally",
    "start": 612,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 623,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "testRegExpMatchArrayGroups",
    "start": 629,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "String",
    "value": "\"2019-04-30\"",
    "start": 658,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "RegularExpression",
    "value": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
    "regex": {
      "flags": "g",
      "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
    },
    "start": 677,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 743,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "testRegExpExecArrayGroups",
    "start": 749,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "RegularExpression",
    "value": "/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g",
    "regex": {
      "flags": "g",
      "pattern": "(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})"
    },
    "start": 777,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"2019-04-30\"",
    "start": 839,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 861,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "testRegExpDotAll",
    "start": 867,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 884,
    "end": 885
  },
  {
    "type": "RegularExpression",
    "value": "/foo/g",
    "regex": {
      "flags": "g",
      "pattern": "foo"
    },
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "dotAll",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 901,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "testIntlPluralRules",
    "start": 907,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 938,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "String",
    "value": "\"ar-EG\"",
    "start": 950,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 970,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "testAsyncGenerator",
    "start": 976,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 996,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1023,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "testAsyncGeneratorFunction",
    "start": 1037,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "AsyncGeneratorFunction",
    "start": 1065,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1095,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1103,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "testAsyncIterable",
    "start": 1109,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1128,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "testAsyncIterableIterator",
    "start": 1168,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 1195,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1224,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "testNumberFormatFormatToParts",
    "start": 1243,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1284,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 1297,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "formatToParts",
    "start": 1306,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1334,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "testArrayFlat",
    "start": 1340,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1367,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "testArrayFlatMap",
    "start": 1373,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 1395,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "testObjectConstructorFromEntries",
    "start": 1412,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 1454,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1471,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "testStringTrimStart",
    "start": 1477,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "trimStart",
    "start": 1502,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1515,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "testStringTrimEnd",
    "start": 1521,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1541,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "trimEnd",
    "start": 1544,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "testStringTrimLeft",
    "start": 1561,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "trimLeft",
    "start": 1585,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "testStringTrimRight",
    "start": 1603,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "trimRight",
    "start": 1628,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1641,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "testSymbolDescription",
    "start": 1647,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 1685,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1709,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "testPromiseAllSettled",
    "start": 1715,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1739,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "allSettled",
    "start": 1747,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "testStringMatchAll",
    "start": 1769,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1790,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "matchAll",
    "start": 1793,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1805,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "testRegExpMatchAll",
    "start": 1811,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "RegularExpression",
    "value": "/matchAll/g",
    "regex": {
      "flags": "g",
      "pattern": "matchAll"
    },
    "start": 1832,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "matchAll",
    "start": 1851,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "String",
    "value": "\"matchAll\"",
    "start": 1861,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1874,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "testBigInt",
    "start": 1880,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 1893,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1900,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1917,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "testPromiseAny",
    "start": 1923,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1948,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1957,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "testStringReplaceAll",
    "start": 1963,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "replaceAll",
    "start": 1989,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2014,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "testDateToTemporalInstant",
    "start": 2020,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2052,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "toTemporalInstant",
    "start": 2059,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  }
]
```

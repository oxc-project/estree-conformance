__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      },
                      "start": 148,
                      "end": 156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 147,
                    "end": 156
                  }
                ],
                "start": 145,
                "end": 158
              },
              "start": 143,
              "end": 158
            },
            "start": 140,
            "end": 158
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
                  "start": 163,
                  "end": 164
                },
                "value": {
                  "type": "Literal",
                  "value": "two",
                  "raw": "'two'",
                  "start": 166,
                  "end": 171
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 171
              }
            ],
            "start": 161,
            "end": 173
          },
          "definite": false,
          "start": 140,
          "end": 173
        }
      ],
      "declare": false,
      "start": 134,
      "end": 174
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
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      },
                      "start": 198,
                      "end": 206
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 188,
                    "end": 206
                  }
                ],
                "start": 186,
                "end": 208
              },
              "start": 184,
              "end": 208
            },
            "start": 181,
            "end": 208
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
                  "start": 213,
                  "end": 214
                },
                "value": {
                  "type": "Literal",
                  "value": "one",
                  "raw": "'one'",
                  "start": 216,
                  "end": 221
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 213,
                "end": 221
              }
            ],
            "start": 211,
            "end": 223
          },
          "definite": false,
          "start": 181,
          "end": 223
        }
      ],
      "declare": false,
      "start": 175,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            },
            "start": 256,
            "end": 265
          },
          "start": 247,
          "end": 265
        }
      ],
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 571
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 584
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 588,
                    "end": 591
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 597
                  },
                  "start": 574,
                  "end": 597
                },
                "definite": false,
                "start": 566,
                "end": 597
              }
            ],
            "declare": false,
            "start": 560,
            "end": 598
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 609
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 611
                },
                "optional": false,
                "computed": false,
                "start": 604,
                "end": 611
              },
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 614,
                "end": 619
              },
              "start": 604,
              "end": 619
            },
            "directive": null,
            "start": 604,
            "end": 620
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 899,
                  "end": 904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 906
                },
                "optional": false,
                "computed": false,
                "start": 899,
                "end": 906
              },
              "right": {
                "type": "Literal",
                "value": "foo2",
                "raw": "'foo2'",
                "start": 909,
                "end": 915
              },
              "start": 899,
              "end": 915
            },
            "directive": null,
            "start": 899,
            "end": 916
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 934
            },
            "start": 922,
            "end": 935
          }
        ],
        "start": 267,
        "end": 937
      },
      "expression": false,
      "start": 226,
      "end": 937
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 937
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 188,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 235,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 575,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 899,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "String",
    "value": "'foo2'",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 922,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      },
                      "start": 148,
                      "end": 156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 147,
                    "end": 156
                  }
                ],
                "start": 145,
                "end": 158
              },
              "start": 143,
              "end": 158
            },
            "start": 140,
            "end": 158
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
                  "start": 163,
                  "end": 164
                },
                "value": {
                  "type": "Literal",
                  "value": "two",
                  "raw": "'two'",
                  "start": 166,
                  "end": 171
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 171
              }
            ],
            "start": 161,
            "end": 173
          },
          "definite": false,
          "start": 140,
          "end": 173
        }
      ],
      "declare": false,
      "start": 134,
      "end": 174
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
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      },
                      "start": 198,
                      "end": 206
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 188,
                    "end": 206
                  }
                ],
                "start": 186,
                "end": 208
              },
              "start": 184,
              "end": 208
            },
            "start": 181,
            "end": 208
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
                  "start": 213,
                  "end": 214
                },
                "value": {
                  "type": "Literal",
                  "value": "one",
                  "raw": "'one'",
                  "start": 216,
                  "end": 221
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 213,
                "end": 221
              }
            ],
            "start": 211,
            "end": 223
          },
          "definite": false,
          "start": 181,
          "end": 223
        }
      ],
      "declare": false,
      "start": 175,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 258,
              "end": 265
            },
            "start": 256,
            "end": 265
          },
          "start": 247,
          "end": 265
        }
      ],
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 501
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 514
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 518,
                    "end": 521
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 527
                  },
                  "start": 504,
                  "end": 527
                },
                "definite": false,
                "start": 496,
                "end": 527
              }
            ],
            "declare": false,
            "start": 490,
            "end": 528
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 539
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 541
                },
                "optional": false,
                "computed": false,
                "start": 534,
                "end": 541
              },
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 544,
                "end": 549
              },
              "start": 534,
              "end": 549
            },
            "directive": null,
            "start": 534,
            "end": 550
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 834
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 836
                },
                "optional": false,
                "computed": false,
                "start": 829,
                "end": 836
              },
              "right": {
                "type": "Literal",
                "value": "foo2",
                "raw": "'foo2'",
                "start": 839,
                "end": 845
              },
              "start": 829,
              "end": 845
            },
            "directive": null,
            "start": 829,
            "end": 846
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 864
            },
            "start": 852,
            "end": 865
          }
        ],
        "start": 267,
        "end": 867
      },
      "expression": false,
      "start": 226,
      "end": 867
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 868
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 188,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 235,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 505,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 829,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "String",
    "value": "'foo2'",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 852,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 172,
                        "end": 178
                      },
                      "start": 170,
                      "end": 178
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 160,
                    "end": 178
                  }
                ],
                "start": 158,
                "end": 180
              },
              "start": 156,
              "end": 180
            },
            "start": 153,
            "end": 180
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
                  "start": 185,
                  "end": 186
                },
                "value": {
                  "type": "Literal",
                  "value": "one",
                  "raw": "'one'",
                  "start": 188,
                  "end": 193
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 193
              }
            ],
            "start": 183,
            "end": 195
          },
          "definite": false,
          "start": 153,
          "end": 195
        }
      ],
      "declare": false,
      "start": 147,
      "end": 196
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
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      },
                      "start": 211,
                      "end": 219
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 210,
                    "end": 219
                  }
                ],
                "start": 208,
                "end": 221
              },
              "start": 206,
              "end": 221
            },
            "start": 203,
            "end": 221
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
                  "start": 226,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": "two",
                  "raw": "'two'",
                  "start": 229,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 234
              }
            ],
            "start": 224,
            "end": 236
          },
          "definite": false,
          "start": 203,
          "end": 236
        }
      ],
      "declare": false,
      "start": 197,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 259
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            },
            "start": 269,
            "end": 278
          },
          "start": 260,
          "end": 278
        }
      ],
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 584
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 588,
                    "end": 597
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 604
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 607,
                    "end": 610
                  },
                  "start": 587,
                  "end": 610
                },
                "definite": false,
                "start": 579,
                "end": 610
              }
            ],
            "declare": false,
            "start": 573,
            "end": 611
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 622
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 624
                },
                "optional": false,
                "computed": false,
                "start": 617,
                "end": 624
              },
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 627,
                "end": 632
              },
              "start": 617,
              "end": 632
            },
            "directive": null,
            "start": 617,
            "end": 633
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 919
                },
                "optional": false,
                "computed": false,
                "start": 912,
                "end": 919
              },
              "right": {
                "type": "Literal",
                "value": "foo2",
                "raw": "'foo2'",
                "start": 922,
                "end": 928
              },
              "start": 912,
              "end": 928
            },
            "directive": null,
            "start": 912,
            "end": 929
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 947
            },
            "start": 935,
            "end": 948
          }
        ],
        "start": 280,
        "end": 950
      },
      "expression": false,
      "start": 239,
      "end": 950
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 951
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 239,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 260,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 573,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 588,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 912,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921
  },
  {
    "type": "String",
    "value": "'foo2'",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 935,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "one",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 172,
                        "end": 178
                      },
                      "start": 170,
                      "end": 178
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 160,
                    "end": 178
                  }
                ],
                "start": 158,
                "end": 180
              },
              "start": 156,
              "end": 180
            },
            "start": 153,
            "end": 180
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
                  "start": 185,
                  "end": 186
                },
                "value": {
                  "type": "Literal",
                  "value": "one",
                  "raw": "'one'",
                  "start": 188,
                  "end": 193
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 193
              }
            ],
            "start": 183,
            "end": 195
          },
          "definite": false,
          "start": 153,
          "end": 195
        }
      ],
      "declare": false,
      "start": 147,
      "end": 196
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
            "name": "two",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      },
                      "start": 211,
                      "end": 219
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 210,
                    "end": 219
                  }
                ],
                "start": 208,
                "end": 221
              },
              "start": 206,
              "end": 221
            },
            "start": 203,
            "end": 221
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
                  "start": 226,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": "two",
                  "raw": "'two'",
                  "start": 229,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 234
              }
            ],
            "start": 224,
            "end": 236
          },
          "definite": false,
          "start": 203,
          "end": 236
        }
      ],
      "declare": false,
      "start": 197,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 259
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 271,
              "end": 278
            },
            "start": 269,
            "end": 278
          },
          "start": 260,
          "end": 278
        }
      ],
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 514
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 518,
                    "end": 527
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 534
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 540
                  },
                  "start": 517,
                  "end": 540
                },
                "definite": false,
                "start": 509,
                "end": 540
              }
            ],
            "declare": false,
            "start": 503,
            "end": 541
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 552
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "optional": false,
                "computed": false,
                "start": 547,
                "end": 554
              },
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 557,
                "end": 562
              },
              "start": 547,
              "end": 562
            },
            "directive": null,
            "start": 547,
            "end": 563
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
                  "name": "three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 847
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 848,
                  "end": 849
                },
                "optional": false,
                "computed": false,
                "start": 842,
                "end": 849
              },
              "right": {
                "type": "Literal",
                "value": "foo2",
                "raw": "'foo2'",
                "start": 852,
                "end": 858
              },
              "start": 842,
              "end": 858
            },
            "directive": null,
            "start": 842,
            "end": 859
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "three",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 877
            },
            "start": 865,
            "end": 878
          }
        ],
        "start": 280,
        "end": 880
      },
      "expression": false,
      "start": 239,
      "end": 880
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 880
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 239,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 260,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 518,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 557,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 842,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "String",
    "value": "'foo2'",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 865,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  }
]
```

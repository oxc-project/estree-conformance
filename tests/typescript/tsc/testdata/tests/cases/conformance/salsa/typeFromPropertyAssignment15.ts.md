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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 28
        },
        "right": {
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
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 54
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 67,
                              "end": 71
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 73
                            },
                            "optional": false,
                            "computed": false,
                            "start": 67,
                            "end": 73
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 76,
                            "end": 77
                          },
                          "start": 67,
                          "end": 77
                        },
                        "directive": null,
                        "start": 67,
                        "end": 77
                      }
                    ],
                    "start": 57,
                    "end": 83
                  },
                  "expression": false,
                  "start": 54,
                  "end": 83
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 43,
                "end": 83
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
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
                    "start": 92,
                    "end": 95
                  },
                  "expression": false,
                  "start": 89,
                  "end": 95
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 88,
                "end": 95
              }
            ],
            "start": 37,
            "end": 97
          },
          "abstract": false,
          "declare": false,
          "start": 31,
          "end": 97
        },
        "start": 17,
        "end": 97
      },
      "directive": null,
      "start": 17,
      "end": 97
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 130,
          "end": 135
        }
      ],
      "declare": false,
      "start": 126,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 141
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "optional": false,
        "computed": false,
        "start": 136,
        "end": 143
      },
      "directive": null,
      "start": 136,
      "end": 143
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 149
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 144,
        "end": 153
      },
      "directive": null,
      "start": 144,
      "end": 153
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
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 162
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 174
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
              },
              "optional": false,
              "computed": false,
              "start": 169,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [],
            "start": 165,
            "end": 182
          },
          "definite": false,
          "start": 158,
          "end": 182
        }
      ],
      "declare": false,
      "start": 154,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 187
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 189
        },
        "optional": false,
        "computed": false,
        "start": 183,
        "end": 189
      },
      "directive": null,
      "start": 183,
      "end": 189
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
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 196
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 190,
        "end": 198
      },
      "directive": null,
      "start": 190,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 43,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 136,
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
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "inno",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "inno",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "inno",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  }
]
```

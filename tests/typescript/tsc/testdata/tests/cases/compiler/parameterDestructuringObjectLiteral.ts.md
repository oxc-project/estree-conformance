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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "headers",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 46,
                          "end": 53
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 56,
                            "end": 58
                          },
                          "start": 54,
                          "end": 58
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 46,
                        "end": 58
                      }
                    ],
                    "start": 44,
                    "end": 60
                  },
                  "start": 42,
                  "end": 60
                },
                "start": 35,
                "end": 60
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 65,
              "end": 68
            },
            "id": null,
            "generator": false,
            "start": 34,
            "end": 68
          },
          "definite": false,
          "start": 28,
          "end": 68
        }
      ],
      "declare": false,
      "start": 22,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "headers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 83
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 90
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 92,
                        "end": 93
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 87,
                      "end": 93
                    }
                  ],
                  "start": 85,
                  "end": 95
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 76,
                "end": 95
              }
            ],
            "start": 74,
            "end": 97
          }
        ],
        "optional": false,
        "start": 70,
        "end": 98
      },
      "directive": null,
      "start": 70,
      "end": 99
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 110
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "headers",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 123
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "headers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 123
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 126,
                        "end": 128
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 128
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 116,
                    "end": 128
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 130
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 135,
              "end": 138
            },
            "id": null,
            "generator": false,
            "start": 113,
            "end": 138
          },
          "definite": false,
          "start": 107,
          "end": 138
        }
      ],
      "declare": false,
      "start": 101,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 143
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "headers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 153
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 160
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 162,
                        "end": 163
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 157,
                      "end": 163
                    }
                  ],
                  "start": 155,
                  "end": 165
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 165
              }
            ],
            "start": 144,
            "end": 167
          }
        ],
        "optional": false,
        "start": 140,
        "end": 168
      },
      "directive": null,
      "start": 140,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 169
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "headers",
    "start": 46,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "headers",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "headers",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "headers",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  }
]
```

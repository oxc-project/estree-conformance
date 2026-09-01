__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 82,
                      "end": 85
                    },
                    "operator": "in",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 89,
                      "end": 91
                    },
                    "start": 82,
                    "end": 91
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 91
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 92
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 95,
              "end": 97
            },
            "definite": false,
            "start": 77,
            "end": 97
          }
        ],
        "declare": false,
        "start": 73,
        "end": 97
      },
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 101
        },
        "prefix": true,
        "start": 99,
        "end": 101
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "prefix": true,
          "start": 107,
          "end": 109
        },
        "start": 103,
        "end": 109
      },
      "body": {
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
              "start": 111,
              "end": 118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 122
            },
            "optional": false,
            "computed": false,
            "start": 111,
            "end": 122
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            }
          ],
          "optional": false,
          "start": 111,
          "end": 125
        },
        "directive": null,
        "start": 111,
        "end": 125
      },
      "start": 68,
      "end": 125
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 140,
                        "end": 143
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 147,
                        "end": 149
                      },
                      "start": 140,
                      "end": 149
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 149
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 136,
                  "end": 149
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 150
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 153,
              "end": 155
            },
            "definite": false,
            "start": 135,
            "end": 155
          }
        ],
        "declare": false,
        "start": 131,
        "end": 155
      },
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 159
        },
        "prefix": true,
        "start": 157,
        "end": 159
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 162
        },
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "prefix": true,
          "start": 165,
          "end": 167
        },
        "start": 161,
        "end": 167
      },
      "body": {
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
              "start": 169,
              "end": 176
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 180
            },
            "optional": false,
            "computed": false,
            "start": 169,
            "end": 180
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            }
          ],
          "optional": false,
          "start": 169,
          "end": 183
        },
        "directive": null,
        "start": 169,
        "end": 183
      },
      "start": 126,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 73,
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
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 82,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 140,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "console",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  }
]
```

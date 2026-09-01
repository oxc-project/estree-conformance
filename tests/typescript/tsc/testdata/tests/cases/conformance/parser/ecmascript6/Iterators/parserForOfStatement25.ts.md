__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
            "init": null,
            "definite": false,
            "start": 77,
            "end": 92
          }
        ],
        "declare": false,
        "start": 73,
        "end": 92
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 97,
            "end": 99
          }
        ],
        "start": 96,
        "end": 100
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
              "start": 102,
              "end": 109
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 113
            },
            "optional": false,
            "computed": false,
            "start": 102,
            "end": 113
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            }
          ],
          "optional": false,
          "start": 102,
          "end": 116
        },
        "directive": null,
        "start": 102,
        "end": 116
      },
      "start": 68,
      "end": 116
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 127,
                    "end": 128
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
                      "start": 127,
                      "end": 128
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 131,
                        "end": 134
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 138,
                        "end": 140
                      },
                      "start": 131,
                      "end": 140
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 140
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 127,
                  "end": 140
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 141
            },
            "init": null,
            "definite": false,
            "start": 126,
            "end": 141
          }
        ],
        "declare": false,
        "start": 122,
        "end": 141
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 146,
            "end": 148
          }
        ],
        "start": 145,
        "end": 149
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
              "start": 151,
              "end": 158
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
            },
            "optional": false,
            "computed": false,
            "start": 151,
            "end": 162
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            }
          ],
          "optional": false,
          "start": 151,
          "end": 165
        },
        "directive": null,
        "start": 151,
        "end": 165
      },
      "start": 117,
      "end": 165
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 165
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
    "type": "Identifier",
    "value": "of",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 131,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  }
]
```

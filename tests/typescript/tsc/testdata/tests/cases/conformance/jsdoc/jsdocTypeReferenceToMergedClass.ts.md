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
            "name": "Workspace",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 70
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 73,
            "end": 75
          },
          "definite": false,
          "start": 61,
          "end": 75
        }
      ],
      "declare": false,
      "start": 57,
      "end": 75
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 113,
          "end": 114
        }
      ],
      "declare": false,
      "start": 109,
      "end": 115
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isServiceProject",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 134
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 116,
        "end": 136
      },
      "directive": null,
      "start": 116,
      "end": 136
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
            "name": "Workspace",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 147
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Project",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 155
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 155
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wp",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 169
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 172,
            "end": 175
          },
          "expression": false,
          "start": 158,
          "end": 175
        },
        "start": 138,
        "end": 175
      },
      "directive": null,
      "start": 138,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Workspace",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Project",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 193
            },
            "optional": false,
            "computed": false,
            "start": 176,
            "end": 193
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 203
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isServiceProject",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 226
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
                  "start": 229,
                  "end": 231
                },
                "expression": false,
                "start": 226,
                "end": 231
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 210,
              "end": 231
            }
          ],
          "start": 206,
          "end": 233
        },
        "start": 176,
        "end": 233
      },
      "directive": null,
      "start": 176,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 233
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Workspace",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "isServiceProject",
    "start": 118,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Workspace",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Project",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "wp",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Workspace",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Project",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "isServiceProject",
    "start": 210,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  }
]
```

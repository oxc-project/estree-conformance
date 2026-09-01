__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "errorOnAssignmentBelowDecl",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 35
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        },
        "start": 37,
        "end": 43
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 44,
        "end": 46
      },
      "expression": false,
      "start": 0,
      "end": 46
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
            "name": "errorOnAssignmentBelowDecl",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 75
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 78,
          "end": 80
        },
        "start": 47,
        "end": 80
      },
      "directive": null,
      "start": 47,
      "end": 81
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
            "name": "errorOnAssignmentBelow",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 111
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 118,
                "end": 122
              },
              "start": 116,
              "end": 122
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 126,
              "end": 128
            },
            "id": null,
            "generator": false,
            "start": 114,
            "end": 128
          },
          "definite": false,
          "start": 89,
          "end": 128
        }
      ],
      "declare": false,
      "start": 83,
      "end": 128
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
            "name": "errorOnAssignmentBelow",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 129,
          "end": 153
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 156,
          "end": 158
        },
        "start": 129,
        "end": 158
      },
      "directive": null,
      "start": 129,
      "end": 159
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
            "name": "errorOnMissingReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 187
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 196,
              "end": 198
            },
            "id": null,
            "generator": false,
            "start": 190,
            "end": 198
          },
          "definite": false,
          "start": 167,
          "end": 198
        }
      ],
      "declare": false,
      "start": 161,
      "end": 198
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
            "name": "errorOnMissingReturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "optional": false,
          "computed": false,
          "start": 199,
          "end": 221
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 224,
          "end": 226
        },
        "start": 199,
        "end": 226
      },
      "directive": null,
      "start": 199,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "errorOnAssignmentBelowDecl",
    "start": 9,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "errorOnAssignmentBelowDecl",
    "start": 47,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 78,
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
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "errorOnAssignmentBelow",
    "start": 89,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 123,
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
    "type": "Identifier",
    "value": "errorOnAssignmentBelow",
    "start": 129,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "errorOnMissingReturn",
    "start": 167,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "errorOnMissingReturn",
    "start": 199,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "String",
    "value": "\"\"",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  }
]
```

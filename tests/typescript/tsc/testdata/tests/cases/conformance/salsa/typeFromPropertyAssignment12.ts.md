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
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 36
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 38,
              "end": 40
            },
            "expression": false,
            "start": 12,
            "end": 40
          },
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "type": "Keyword",
    "value": "function",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 30,
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
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "start": 20,
            "end": 25
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pos",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 29
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 29
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "line",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ch",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 50
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 52,
            "end": 54
          },
          "expression": false,
          "start": 32,
          "end": 54
        },
        "start": 20,
        "end": 54
      },
      "directive": null,
      "start": 20,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "optional": false,
            "computed": false,
            "start": 78,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 97
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 102
        },
        "optional": false,
        "computed": false,
        "start": 78,
        "end": 102
      },
      "directive": null,
      "start": 78,
      "end": 103
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
            "name": "pos",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 111
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
                "start": 118,
                "end": 123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pos",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 128,
                "end": 129
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 131,
                "end": 134
              }
            ],
            "start": 114,
            "end": 135
          },
          "definite": false,
          "start": 108,
          "end": 135
        }
      ],
      "declare": false,
      "start": 104,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 145
        },
        "optional": false,
        "computed": false,
        "start": 137,
        "end": 145
      },
      "directive": null,
      "start": 137,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "ch",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  }
]
```

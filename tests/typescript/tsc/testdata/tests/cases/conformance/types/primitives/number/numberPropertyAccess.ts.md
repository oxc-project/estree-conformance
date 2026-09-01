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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toExponential",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 34
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 34
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 19,
            "end": 36
          },
          "definite": false,
          "start": 15,
          "end": 36
        }
      ],
      "declare": false,
      "start": 11,
      "end": 37
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasOwnProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 62
              },
              "optional": false,
              "computed": false,
              "start": 46,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "toFixed",
                "raw": "'toFixed'",
                "start": 63,
                "end": 72
              }
            ],
            "optional": false,
            "start": 46,
            "end": 73
          },
          "definite": false,
          "start": 42,
          "end": 73
        }
      ],
      "declare": false,
      "start": 38,
      "end": 74
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "property": {
                "type": "Literal",
                "value": "toExponential",
                "raw": "'toExponential'",
                "start": 86,
                "end": 101
              },
              "optional": false,
              "computed": true,
              "start": 84,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 84,
            "end": 104
          },
          "definite": false,
          "start": 80,
          "end": 104
        }
      ],
      "declare": false,
      "start": 76,
      "end": 105
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "property": {
                "type": "Literal",
                "value": "hasOwnProperty",
                "raw": "'hasOwnProperty'",
                "start": 116,
                "end": 132
              },
              "optional": false,
              "computed": true,
              "start": 114,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "toFixed",
                "raw": "'toFixed'",
                "start": 134,
                "end": 143
              }
            ],
            "optional": false,
            "start": 114,
            "end": 144
          },
          "definite": false,
          "start": 110,
          "end": 144
        }
      ],
      "declare": false,
      "start": 106,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 145
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "var",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 21,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 48,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "'toFixed'",
    "start": 63,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "'toExponential'",
    "start": 86,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "'hasOwnProperty'",
    "start": 116,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "'toFixed'",
    "start": 134,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  }
]
```

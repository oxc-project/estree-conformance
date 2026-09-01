__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "exportKind": "value",
          "start": 29,
          "end": 30
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 66
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 79
                  },
                  "optional": false,
                  "computed": false,
                  "start": 60,
                  "end": 79
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 83,
                    "end": 85
                  },
                  "expression": false,
                  "start": 80,
                  "end": 85
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 53,
                "end": 85
              }
            ],
            "start": 51,
            "end": 87
          },
          "definite": false,
          "start": 47,
          "end": 87
        }
      ],
      "declare": false,
      "start": 35,
      "end": 88
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 100,
            "end": 101
          },
          "definite": false,
          "start": 96,
          "end": 101
        }
      ],
      "declare": false,
      "start": 90,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "init": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 121,
              "end": 122
            },
            "definite": false,
            "start": 117,
            "end": 122
          }
        ],
        "declare": false,
        "start": 111,
        "end": 123
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 123
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 4,
        "raw": "4",
        "start": 140,
        "end": 141
      },
      "exportKind": "value",
      "start": 125,
      "end": 142
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 155
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 155
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          }
        ],
        "optional": false,
        "start": 144,
        "end": 167
      },
      "directive": null,
      "start": 144,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 67,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 90,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 132,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 144,
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
    "value": "log",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  }
]
```

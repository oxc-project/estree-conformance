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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a/",
                "raw": "\"a/\"",
                "start": 11,
                "end": 15
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 23
              },
              "optional": false,
              "computed": false,
              "start": 11,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[/]/",
                "regex": {
                  "pattern": ".[/]",
                  "flags": ""
                },
                "start": 24,
                "end": 30
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 32,
                "end": 34
              }
            ],
            "optional": false,
            "start": 11,
            "end": 35
          },
          "definite": false,
          "start": 4,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 45
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a//",
                "raw": "\"a//\"",
                "start": 48,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 48,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[//]/g",
                "regex": {
                  "pattern": ".[//]",
                  "flags": "g"
                },
                "start": 62,
                "end": 70
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 72,
                "end": 74
              }
            ],
            "optional": false,
            "start": 48,
            "end": 75
          },
          "definite": false,
          "start": 41,
          "end": 75
        }
      ],
      "declare": false,
      "start": 37,
      "end": 76
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "a/",
                "raw": "\"a/\"",
                "start": 88,
                "end": 92
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "replace",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 100
              },
              "optional": false,
              "computed": false,
              "start": 88,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/.[/no sleep /till/]/",
                "regex": {
                  "pattern": ".[/no sleep /till/]",
                  "flags": ""
                },
                "start": 101,
                "end": 122
              },
              {
                "type": "Literal",
                "value": "bugfix",
                "raw": "\"bugfix\"",
                "start": 124,
                "end": 132
              }
            ],
            "optional": false,
            "start": 88,
            "end": 133
          },
          "definite": false,
          "start": 81,
          "end": 133
        }
      ],
      "declare": false,
      "start": 77,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
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
    "value": "foo1",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "String",
    "value": "\"a/\"",
    "start": 11,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "RegularExpression",
    "value": "/.[/]/",
    "regex": {
      "flags": "",
      "pattern": ".[/]"
    },
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"a//\"",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "RegularExpression",
    "value": "/.[//]/g",
    "regex": {
      "flags": "g",
      "pattern": ".[//]"
    },
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"a/\"",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "RegularExpression",
    "value": "/.[/no sleep /till/]/",
    "regex": {
      "flags": "",
      "pattern": ".[/no sleep /till/]"
    },
    "start": 101,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"bugfix\"",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  }
]
```

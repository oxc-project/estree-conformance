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
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": null,
                "raw": "/\\w/g",
                "regex": {
                  "pattern": "\\w",
                  "flags": "g"
                },
                "start": 16,
                "end": 21
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 28
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 37
                },
                "optional": false,
                "computed": false,
                "start": 22,
                "end": 37
              },
              "optional": false,
              "computed": true,
              "start": 16,
              "end": 38
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "matchAll",
                "raw": "\"matchAll\"",
                "start": 39,
                "end": 49
              }
            ],
            "optional": false,
            "start": 16,
            "end": 50
          },
          "definite": false,
          "start": 6,
          "end": 50
        }
      ],
      "declare": false,
      "start": 0,
      "end": 51
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 63
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matches",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 77
                },
                "start": 67,
                "end": 77
              }
            ],
            "start": 66,
            "end": 78
          },
          "definite": false,
          "start": 58,
          "end": 78
        }
      ],
      "declare": false,
      "start": 52,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 93
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 93
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 93
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 100
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 100
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 95,
                "end": 100
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 102
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 110
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 111,
              "end": 112
            },
            "optional": false,
            "computed": true,
            "start": 105,
            "end": 113
          },
          "definite": false,
          "start": 86,
          "end": 113
        }
      ],
      "declare": false,
      "start": 80,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "RegularExpression",
    "value": "/\\w/g",
    "regex": {
      "flags": "g",
      "pattern": "\\w"
    },
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "matchAll",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"matchAll\"",
    "start": 39,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 58,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  }
]
```

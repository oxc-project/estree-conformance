__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
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
                  "start": 21,
                  "end": 24
                },
                "value": {
                  "type": "Literal",
                  "value": "hey",
                  "raw": "'hey'",
                  "start": 26,
                  "end": 31
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 31
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
                },
                "value": {
                  "type": "Literal",
                  "value": "nay",
                  "raw": "'nay'",
                  "start": 47,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 52
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 68
                },
                "value": {
                  "type": "Literal",
                  "value": "oh my",
                  "raw": "'oh my'",
                  "start": 70,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 55,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noWay",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 94
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 96,
                  "end": 101
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 101
              }
            ],
            "start": 11,
            "end": 104
          },
          "definite": false,
          "start": 4,
          "end": 104
        }
      ],
      "declare": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 111
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 115
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 122
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 126
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 126
            },
            "start": 107,
            "end": 126
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "optional": false,
            "computed": false,
            "start": 129,
            "end": 137
          },
          "start": 107,
          "end": 137
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "noWay",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 140,
          "end": 150
        },
        "start": 107,
        "end": 150
      },
      "directive": null,
      "start": 107,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "data",
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
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "'hey'",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "'nay'",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "'oh my'",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 80,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "noWay",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "data",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "noWay",
    "start": 145,
    "end": 150
  }
]
```

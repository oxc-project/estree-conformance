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
            "type": "ObjectPattern",
            "decorators": [],
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
                    "start": 7,
                    "end": 13
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14,
                    "end": 22
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7,
                  "end": 22
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "destructured",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 39
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 42,
            "end": 44
          },
          "definite": false,
          "start": 4,
          "end": 44
        }
      ],
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "destructured",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 63
        },
        "prefix": true,
        "start": 46,
        "end": 63
      },
      "directive": null,
      "start": 46,
      "end": 64
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
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 80,
            "end": 86
          },
          "definite": false,
          "start": 72,
          "end": 86
        }
      ],
      "declare": false,
      "start": 66,
      "end": 87
    },
    {
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
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 101
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 112
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 95,
                "end": 112
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 114
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 123
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 125,
                  "end": 128
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 119,
                "end": 128
              }
            ],
            "start": 117,
            "end": 130
          },
          "definite": false,
          "start": 93,
          "end": 130
        }
      ],
      "declare": false,
      "start": 89,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "computed",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 145
        },
        "prefix": true,
        "start": 132,
        "end": 145
      },
      "directive": null,
      "start": 132,
      "end": 146
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
            "name": "notPresent",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 164
          },
          "init": {
            "type": "Literal",
            "value": "prop2",
            "raw": "\"prop2\"",
            "start": 167,
            "end": 174
          },
          "definite": false,
          "start": 154,
          "end": 174
        }
      ],
      "declare": false,
      "start": 148,
      "end": 175
    },
    {
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
                  "name": "notPresent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 194
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 206
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 183,
                "end": 206
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 208
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 217
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 219,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 213,
                "end": 222
              }
            ],
            "start": 211,
            "end": 224
          },
          "definite": false,
          "start": 181,
          "end": 224
        }
      ],
      "declare": false,
      "start": 177,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
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
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "destructured",
    "start": 25,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "destructured",
    "start": 51,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "named",
    "start": 96,
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
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 132,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "notPresent",
    "start": 154,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"prop2\"",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "notPresent",
    "start": 184,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "computed2",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  }
]
```

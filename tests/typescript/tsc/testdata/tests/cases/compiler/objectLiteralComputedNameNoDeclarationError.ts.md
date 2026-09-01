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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "BANANA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 24
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "banana",
                    "raw": "'banana'",
                    "start": 26,
                    "end": 34
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "banana",
                      "raw": "'banana'",
                      "start": 38,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "start": 26,
                  "end": 46
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 18,
                "end": 46
              }
            ],
            "start": 12,
            "end": 49
          },
          "definite": false,
          "start": 6,
          "end": 49
        }
      ],
      "declare": false,
      "start": 0,
      "end": 49
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
              "name": "Baa",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 80
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BANANA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 87
                    },
                    "optional": false,
                    "computed": false,
                    "start": 77,
                    "end": 87
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 90,
                    "end": 91
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 76,
                  "end": 91
                }
              ],
              "start": 70,
              "end": 93
            },
            "definite": false,
            "start": 64,
            "end": 93
          }
        ],
        "declare": false,
        "start": 58,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "BANANA",
    "start": 18,
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
    "value": "'banana'",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 35,
    "end": 37
  },
  {
    "type": "String",
    "value": "'banana'",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Baa",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "BANANA",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  }
]
```

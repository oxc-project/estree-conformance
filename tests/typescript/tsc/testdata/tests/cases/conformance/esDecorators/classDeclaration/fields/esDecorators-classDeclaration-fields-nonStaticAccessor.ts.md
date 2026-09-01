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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "field3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "init": {
            "type": "Literal",
            "value": "field3",
            "raw": "\"field3\"",
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 29,
          "end": 46
        }
      ],
      "declare": false,
      "start": 23,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 68,
                      "end": 69
                    }
                  ],
                  "optional": false,
                  "start": 64,
                  "end": 70
                },
                "start": 63,
                "end": 70
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 89,
              "end": 90
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 63,
            "end": 91
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 101,
                      "end": 102
                    }
                  ],
                  "optional": false,
                  "start": 97,
                  "end": 103
                },
                "start": 96,
                "end": 103
              }
            ],
            "key": {
              "type": "Literal",
              "value": "field2",
              "raw": "\"field2\"",
              "start": 114,
              "end": 122
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 126,
              "end": 127
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 96,
            "end": 128
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 137
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 138,
                      "end": 139
                    }
                  ],
                  "optional": false,
                  "start": 134,
                  "end": 140
                },
                "start": 133,
                "end": 140
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 157
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 161,
              "end": 162
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 133,
            "end": 163
          }
        ],
        "start": 57,
        "end": 165
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 165
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "field3",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"field3\"",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 71,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "field1",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"field2\"",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "field3",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  }
]
```

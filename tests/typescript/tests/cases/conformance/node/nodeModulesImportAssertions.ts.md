__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 17,
        "end": 33
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 47
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 49,
            "end": 55
          },
          "start": 43,
          "end": 55
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 12,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 17,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 17,
        "end": 33
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 47
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 49,
            "end": 55
          },
          "start": 43,
          "end": 55
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 58
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
            "name": "json2",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 129
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./package.json",
              "raw": "\"./package.json\"",
              "start": 139,
              "end": 155
            },
            "options": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 165
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 173
                        },
                        "value": {
                          "type": "Literal",
                          "value": "json",
                          "raw": "\"json\"",
                          "start": 175,
                          "end": 181
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 169,
                        "end": 181
                      }
                    ],
                    "start": 167,
                    "end": 183
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 159,
                  "end": 183
                }
              ],
              "start": 157,
              "end": 185
            },
            "phase": null,
            "start": 132,
            "end": 186
          },
          "definite": false,
          "start": 124,
          "end": 186
        }
      ],
      "declare": false,
      "start": 118,
      "end": 187
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 12,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 17,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "json2",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"./package.json\"",
    "start": 139,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  }
]
```
